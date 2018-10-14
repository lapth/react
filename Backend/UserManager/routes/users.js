var express = require('express');
var router = express.Router();
var UserDao = require('../data_persistence/daos/UserDAO');
var userDao = new UserDao();

/* GET users listing. */
router.get('/', function(req, res, next) {
  userDao.getAllUsers((users) => {
    res.json(users);
  })  
});

module.exports = router;
