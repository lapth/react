var db = require('./DBConnect');

class UserDAO {
    constructor() {

    }

    getAllUser() {

    }

    addUser(user) {
        // Get the documents collection
        const collection = db.collection('documents');
        // Insert some documents
        collection.insertMany([
            {user}
        ], function(err, result) {
            assert.equal(err, null);
            assert.equal(3, result.result.n);
            assert.equal(3, result.ops.length);
            console.log("Inserted 3 documents into the collection");
            callback((result) => {
                console.log(result);
            });
        });
    }

    getUser(userId) {

    }

    updateUser(user) {

    }

    deleteUser(userId) {

    }
}

var userDAO = new UserDAO();
var user = {
    "key":"2",
    "hoTen": "hoTen",
    "tel": "12321321312",
    "quyen": "2"
}

userDAO.addUser(user);

exports.userDAO = userDAO;