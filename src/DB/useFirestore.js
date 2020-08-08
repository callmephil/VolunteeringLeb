import { firestore, Timestamp } from "./firebase"
import { useState, useEffect } from "react";

const SKIP = Symbol("SKIP")
const BREAK = Symbol("BREAK")
/**
 * A simple hook to retrieve collections from Firebase
 * This is a simple hook that retrieves THE ENTIRE collection.
 * Don't use it for large dataset
 * @param {string} collectionName the name of the collection you want to load
 */
export const useFirestoreCollection = (collectionName) => {

  const onError = (err) => console.error(err)
  const [ collection, setCollection ] = useState([])
  
  useEffect(() => {
    firestore.collection(collectionName).get()
      .then(querySnapshot => {
        const list = []
        querySnapshot.forEach(doc => {
            const data = doc.data()
            for(let key in data){
              if(data[key] instanceof Timestamp){
                data[key] = data[key].toDate()
              }
            }
            const id = doc.id
            const node = {
              id, dirty:false, localOnly:false, data
            }
            list.push(node)
        });
        setCollection(list)
      })
      .catch(onError)
  }, [ collectionName ])

  const add = (data) => {

    const tempId = Math.random() + (new Date())
    const node = {
      id:tempId, dirty:true, localOnly:true, data
    }
    setCollection([...data, node ])

    return firestore.collection(collectionName).add(data)
    .then((docRef)=>{
      const id = docRef.id
      setCollection(data.map(node=>
        node.id === tempId ? { id, dirty: false, localOnly:false, ...node } : node
      ))
    }).catch(onError)
  }

  const update = (id, data) => {

    setCollection(data.map(node=>
      node.id === id ? { id, dirty: true, data: {...node.data, ...data } } : node
    ))

    return firestore.collection(collectionName).doc(id).set(data, { merge: true })
      .then(()=>{
        setCollection(data.map(node=>
          node.id === id ? { dirty: false, ...node } : node
        ))
      })
      .catch(onError)
  }

  const map = (fn) => {
    const { length } = collection
    const output = []
    let index = 0;
    while(index < length){
      const { id, dirty, localOnly, data } = collection[index]
      const meta = { id, dirty, localOnly, index, BREAK, SKIP }
      const ret = fn(data, meta)
      if(ret === BREAK){ return output }
      if(ret !== SKIP){
        output.push(ret)
      }
      index = index + 1
    }
    return output
  }

  return { add, update, map, collection }

}