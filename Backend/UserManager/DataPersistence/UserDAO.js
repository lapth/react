const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const uuidv1 = require('uuid/v1');

// Connection URL
const url = 'mongodb://admin:Admin12345@ds123259.mlab.com:23259/react-learning';

// Database Name
const dbName = 'react-learning';

// Create a new MongoClient
const client = new MongoClient(url);
const ROOT_NODE = ROOT_NODE;

class UserDAO {
    constructor(){
        console.log('Init UserDAO');
    }

    addUser = (user) => {
        // Use connect method to connect to the Server
        client.connect(function(err) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            var db = client.db(dbName);
            // Get the documents collection
            const collection = db.collection(ROOT_NODE);
            // Insert some documents
            user._id = uuidv1();
            collection.insertMany([
                user
            ], function(err, result) {
                assert.equal(err, null);
                console.log("Inserted user into the collection");
                console.log(result);
            });
        });
        client.close();
    };

    updateUser = (user) => {
        client.connect(function(err) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            var db = client.db(dbName);
            // Get the documents collection
            const collection = db.collection(ROOT_NODE);
            collection.updateOne(
                {_id:user._id},
                {$set: {
                    hoTen: user.hoTen,
                    tel: user.tel,
                    quyen: user.quyen
                }},
                (err, result) => {
                    assert.equal(err, null);
                    console.log("Updated the document: " + user._id);
                }
            )
        });
        client.close();
    }

    getUser = (userId) => {
        client.connect(function(err) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            var db = client.db(dbName);
            // Get the documents collection
            const collection = db.collection(ROOT_NODE);
            var user = collection.find({_id: userId}).toArray((err, users) => {
                assert.equal(err, null);
                assert.equal(1, users.length)
                console.log(users[0]);
                return users[0];
            });
            return user;
        });
        client.close();
    }

    getAllUsers = (db) => {
        client.connect(function(err) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            const collection = db.collection(ROOT_NODE);
            collection.find({}).toArray((err, users) => {
                assert.equal(err, null);
                console.log(users);
                return users;
            })
        });
        client.close();
    }
}

exports.userDao = new UserDAO();