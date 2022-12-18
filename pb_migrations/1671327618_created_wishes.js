migrate((db) => {
  const collection = new Collection({
    "id": "odyp9z0iomlpkvy",
    "created": "2022-12-18 01:40:18.461Z",
    "updated": "2022-12-18 01:40:18.461Z",
    "name": "wishes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "plhyoylz",
        "name": "item",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wrr5hvrq",
        "name": "link",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "pdl89pna",
        "name": "comment",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("odyp9z0iomlpkvy");

  return dao.deleteCollection(collection);
})
