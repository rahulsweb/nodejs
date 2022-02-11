const mysql=require('mysql2');
const connection={
    host:"localhost",
    user:"root",
    database:"node-mysql",
    password:"ac3r"
};
const pool=mysql.createPool(connection); 
module.exports=pool.promise();