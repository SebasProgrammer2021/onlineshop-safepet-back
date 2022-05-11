const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rodri",
  database: "onlineshop",
});

module.exports = mysqlConnection;
