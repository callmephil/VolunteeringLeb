import { firestore, Timestamp } from "./firebase";

const SKIP = Symbol("SKIP");
const BREAK = Symbol("BREAK");
const cache = {}

/**
 * A simple collection handler to retrieve collections from Firebase
 * This retrieves THE ENTIRE collection.
 * Don't use it for large dataset!
 *
 * Collections are returned as arrays of this object:
 * ```
 * {
 *   id: string // firebaseId
 *   dirty: bool // if the node is not synced yet
 *   localOnly: bool // if the node is just created
 *   deleted: boolean // if the node is deleted
 *   error: string // if there was an error in the last operation
 *   data: any // whatever you're storing
 * }
 * ```
 * This is optimistic; that is, when you do an operation, it assumes
 * the operation will succeed and immediately updates the collection.
 *
 * It sets the `dirty` bit to `true`. When an answer is received from the server,
 * `dirty` is set to `false`.
 * If the server response is not positive, then an error is logged in the `error`
 * part, and `dirty` stays `false`.
 *
 * @param {string} collectionName the name of the collection you want to load
 */
export const handleCollection = (collectionName) => {
  if(!cache[collectionName]){
    cache[collectionName] = createCollection(collectionName)
  }
  return cache[collectionName]
}

export default handleCollection

const onError = (err) => console.error(err);

const createCollection = (collectionName) => {

  let collection = []

  const listeners = new Set()

  const setCollection = (newCollection) => {
    const oldCollection = collection
    collection = newCollection
    listeners.forEach( l => l(collection, oldCollection))
  }

  const getCollection = () => collection

  const addListener = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  const getAll = () => {
    firestore
      .collection(collectionName)
      .get()
      .then((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          for (let key in data) {
            if (data[key] instanceof Timestamp) {
              data[key] = data[key].toDate();
            }
          }
          const id = doc.id;
          const node = {
            id,
            dirty: false,
            localOnly: false,
            deleted: false,
            error: "",
            data,
          };
          list.push(node);
        });
        setCollection(list);
      })
      .catch(onError);
  }

  /**
   * Creates a new object
   * @param {any} data
   */
  const add = (data) => {
    const tempId = Math.random() + new Date();
    const node = {
      id: tempId,
      dirty: true,
      localOnly: true,
      data,
    };
    setCollection([...collection, node]);

    return firestore
      .collection(collectionName)
      .add(data)
      .then((docRef) => {
        const id = docRef.id;
        setCollection(
          collection.map((node) =>
            node.id === tempId
              ? { id, dirty: false, localOnly: false, ...node }
              : node
          )
        );
      })
      .catch((err) => {
        onError(err);
        setCollection(
          collection.map((node) =>
            node.id === tempId ? { error: err.message, ...node } : node
          )
        );
      });
  };

  /**
   * Updates an existing object
   * @param {string} id the firebase ID
   * @param {any} data your new data. It will be merged with previous data
   * @param {bool} merge ... unless `merge` is set to false
   */
  const update = (id, data, merge = true) => {
    setCollection(
      collection.map((node) =>
        node.id === id
          ? { id, dirty: true, data: { ...node.data, ...data } }
          : node
      )
    );

    return firestore
      .collection(collectionName)
      .doc(id)
      .set(data, { merge })
      .then(() => {
        setCollection(
          collection.map((node) =>
            node.id === id ? { dirty: false, ...node } : node
          )
        );
      })
      .catch((err) => {
        onError(err);
        setCollection(
          collection.map((node) =>
            node.id === id ? { error: err.message, ...node } : node
          )
        );
      });
  };

  /**
   * Removes an object from the database
   * @param {string} id the Firebase ID
   */
  const remove = (id) => {
    setCollection(
      collection.map((node) =>
        node.id === id ? { dirty: true, deleted: true, ...node } : node
      )
    );

    return firestore
      .collection(collectionName)
      .doc(id)
      .delete()
      .then(() => {
        const newCollection = collection.splice();
        const index = newCollection.findIndex((node) => node.id === id);
        if (index >= 0) {
          newCollection.splice(index, 1);
          setCollection(newCollection);
        }
      })
      .catch((err) => {
        onError(err);
        setCollection(
          collection.map((node) =>
            node.id === id ? { error: err.message, ...node } : node
          )
        );
      });
  };

  /**
   * Maps the collection. Gives you the internal data of each node
   * This can also be used to filter, or to find.
   *
   * Return `SKIP` to filter an item out
   * Return `BREAK` to stop the loop
   *
   * The function you pass receives:
   * - data: the data inside the node (whatever you saved on firebase)
   * - meta: an object
   * ```
   * {
   *   id: string, // the FirebaseID
   *   dirty: bool, // if the node is not yet updated on Firebase
   *   localOnly: bool,  // if true, the node doesn't exist on Firebase
   *   error: string, // if there was an error adding, updating, or deleting, it will be logged here
   *   index: number, // the index in the loop
   *   BREAK: Symbol, // return this to interrupt the loop
   *   SKIP: Symbol // return this to skip the item in the loop
   * }
   * ```
   * @param {*} fn
   * @param {*} withDeleted
   */
  const map = (fn, withDeleted = false) => {
    const { length } = collection;
    const output = [];
    let index = 0;
    while (index < length) {
      const { id, dirty, localOnly, error, data } = collection[index];
      const meta = { id, dirty, localOnly, index, error, BREAK, SKIP };
      const ret = fn(data, meta);
      if (ret === BREAK) {
        return output;
      }
      if (ret !== SKIP) {
        output.push(ret);
      }
      index = index + 1;
    }
    return output;
  };

  return { add, update, map, remove, getAll, addListener, getCollection };
};
