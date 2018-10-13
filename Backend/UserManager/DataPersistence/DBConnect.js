const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://admin:Admin12345@ds123259.mlab.com:23259/react-learning';

// Database Name
const dbName = 'react-learning';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
var db;
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db = client.db(dbName);
  addUser(db, user);
  client.close();
});

var user = {
    "key":"2",
    "hoTen": "hoTen",
    "tel": "12321321312",
    "quyen": "2"
};
addUser = (db, user) => {
    // Get the documents collection
    const collection = db.collection('roo_node');
    // Insert some documents
    collection.insertMany([
        user
    ], function(err, result) {
        assert.equal(err, null);
        console.log("Inserted 3 documents into the collection");
        console.log(result);
    });
};

exports.db = db;