const query = require('../db/pool')
const User = {
    async findByName(username) {
      return new Promise((resolve, reject) => {
        // 查询操作
        query('SELECT * FROM test.users WHERE username = ?', [username], function (err, result) {
          if (err) {
              console.log("数据库查询失败");
          } else {
            resolve(result);
          }
        })
      })
    },
    async createUser(username, password) {
      return new Promise((resolve, reject) => {
        // 查询操作
        query(`INSERT INTO test.users (username, password) VALUES (?, ?)`, [`${username}`, `${password}`], function (err, result) {
          if (err) {
              console.log("数据库查询失败");
          } else {
            resolve(result);
          }
        })
      })
    },
    async deleteUser(username, password) {
      return new Promise((resolve, reject) => {
        // 查询操作
        query(`DELETE FROM users WHERE username = ?`, [`${username}`], function (err, result) {
          if (err) {
              console.log("数据库查询失败");
          } else {
            resolve(result);
          }
        })
      })
    },
    async updateUser(username, password) {
      return new Promise((resolve, reject) => {
        // 查询操作
        query(`UPDATE users SET username = ?, password = ? WHERE id = ?`, [`${username}`, `${password}`, 1], function (err, result) {
          if (err) {
              console.log("数据库查询失败");
          } else {
            resolve(result);
          }
        })
      })
    }
};

module.exports = User;