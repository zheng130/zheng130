const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const connection = require('./dataBase/db')

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var response = {}
const resolveData = function() {
    return new Promise((resolve, reject) => {
        // connection.query(`SELECT * FROM RUNOOB.user where username = ? and userpwd = ?`, [response.user_name, response.user_pwd],(err,data) => {
        //     resolve(data)
        // })
        connection.query(`select runoob.students.age, runoob.websites.id, runoob.websites.url, runoob.students.name from runoob.websites INNER JOIN runoob.students on  runoob.students.age = runoob.websites.id`, function(err,data) {
            resolve(data)
        })
    })
}
app.get('', urlencodedParser, async function (req, res) {
    // 输出 JSON 格式
    response = {
        "user_name":req.body.user_name,
        "user_pwd":req.body.user_pwd
    };
    const data = await resolveData() 
    res.end(JSON.stringify(data));
 })
var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
})

module.exports = server

Promise.resolve().then(() => {
    console.log(1)
})
new Promise((resolve) => {
    console.log(2)
    // resolve(2)
}).then(() => {
    console.log(3)
})
