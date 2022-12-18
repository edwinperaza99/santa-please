migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odyp9z0iomlpkvy")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("odyp9z0iomlpkvy")

  collection.createRule = null

  return dao.saveCollection(collection)
})
