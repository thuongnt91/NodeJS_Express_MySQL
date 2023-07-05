//khai báo thư viện
const mysql = require("mysql");
//khoi tao ket noi den mysql
const connect = mysql.createConnection({
  host: "localhost",
  password: "123456789",
  database: "posts",
  user: "root",
  port: 3306,
});
connect.connect((error) => {
  if (error) {
    console.log("that bai", error);
  } else {
    console.log("thanh cong");
  }
});
module.exports = connect;
