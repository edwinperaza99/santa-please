migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odyp9z0iomlpkvy")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odyp9z0iomlpkvy")

  collection.listRule = null

  return dao.saveCollection(collection)
})
