const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const uuidv1 = require('uuid/v1');

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
  getUser(db, "4220a330-cf3d-11e8-9187-dfb993376d01");
  client.close();
});

var user = {
    "_id": uuidv1(),
    "hoTen": "hoTen",
    "tel": "12321321312",
    "quyen": "2"
};
addUser = (db, user) => {
    // Get the documents collection
    const collection = db.collection('root_node');
    // Insert some documents
    collection.insertMany([
        user
    ], function(err, result) {
        assert.equal(err, null);
        console.log("Inserted 3 documents into the collection");
        console.log(result);
    });
};

updateUser = (db, userId) => {
    const collection = db.collection('root_node');
    collection.updateOne(
        {_id:userId},
        {$set: {hoTen: "Moi update"}},
        (err, result) => {
            assert.equal(err, null);
            //assert.equal(1, result.result.n);
            console.log("Updated the document");
        }
    )
}

getUser = (db, userId) => {
    const collection = db.collection('root_node');
    var user = collection.find({_id: userId}).toArray((err, users) => {
        assert.equal(err, null);
        assert.equal(1, users.length)
        console.log(users[0]);
        return users[0];
    });
    return user;
}

getAllUsers = (db) => {
    const collection = db.collection('root_node');
    collection.find({}).toArray((err, users) => {
        assert.equal(err, null);
        console.log(users);
        return users;
    })
}

exports.db = db;