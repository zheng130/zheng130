var express = require('express');
const User = require('../model/userModel')
var router = express.Router();
const base = `
    CREATE TABLE IF NOT EXISTS test.users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `
router.post('/', async function (req, res, next) {
    const {username, password} = req.body
    const handle = `
            INSERT INTO test.users (username, password) VALUES ('${username}', '${password}')
        `;
    console.log(11, req.ip)
    const data = await User.findByName(username);
    if (data.length > 0) {
      res.send(JSON.stringify({code:0, mes: '该用户名已经存在'}));
      return false
    }
    const response = await User.createUser(username, password)
    res.send(JSON.stringify({code:0, mes: '注册成功'}));
});

module.exports = router;