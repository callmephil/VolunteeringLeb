import { handleCollection } from "./handleCollection";
import { storage, now } from "./firebase";
import { useState, useEffect } from "react";

const { add:_add, update:_update, map, remove, getAll, addListener, getCollection } = handleCollection("missing")

const filter = {}
export const required_fields = ["phoneNbr", "fullName", "description"];
export const allowed_fields = [...required_fields, "photo", "location"].map( name => {
  filter[name] = true
  return name
})

const prepare = async (_data, is_new) => {

  const errors = []
  const data = {}

  Object.keys(_data).forEach(name=>{
    if(filter[name]){
      data[name] = _data[name]
    }
  })

  if (is_new) {
    for (const fieldName of required_fields) {
      if (!data[fieldName]) {
        errors.push({
          key: fieldName + "-required" + Math.random(),
          name: fieldName,
          text: `${fieldName} is required`,
        });
      }
    }
    // TODO: more validation
  }

  if(errors.length){
    throw errors
  }

  const { photo:file, created, ...person } = data

  const meta = {
    created: is_new ? now() : created,
    lastUpdate: now(),
  };

  if(file){
    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    const photo = await fileRef.getDownloadURL()
    return { ...person, ...meta, photo }
  }

  return { ...person, ...meta };
}

const add = async (data) => {
  data = await prepare(data, true)
  return _add(data)
}

const update = async (id, data, merge = true) => {
  data = await prepare(data)
  return _update(data)
}

export const upsert = async (id, data) => {
  if(typeof id !== 'undefined' && id !== null ){
    return update(id, data)
  }
  return add(data)
}

export const useMissingPeople = () => {

  const [ collection, setCollection ] = useState(getCollection())

  useEffect(()=>{
    const remove = addListener(setCollection)
    getAll()
    return remove
  }, [])

  return { map, collection }
}

export { add, update, map, remove, getAll, addListener, getCollection }

