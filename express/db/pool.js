const mysql = require('mysql');
const config = require('./config');

const pool = mysql.createPool({
    connecTimeout: 500,//连接超时
    multipleStatements: false,//是否允许一个query中包含多条sql语句，
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
});
const query=function(sql,sqlParams,callback){
    //获取数据库的连接
    pool.getConnection(function(err,conn){
        if (err){
            //错误回调
            callback(err,null,null);
        } else {
            //连接成功的情况
            conn.query(sql, sqlParams, function (err,vals,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(err,vals,fields);
            });
        }
    });
};
  /*模块输出*/
  module.exports = query;
