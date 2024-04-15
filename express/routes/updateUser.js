var express = require('express');
const User = require('../model/userModel')
var router = express.Router();
router.post('/', async function (req, res, next) {
    const {username, password} = req.body
    const response = await User.updateUser(username, password)
    res.send(JSON.stringify({code:0, mes: '更新成功'}));
});

module.exports = router;