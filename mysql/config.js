const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
  host: "bz19wlktes4tn01bh54y-mysql.services.clever-cloud.com",
  user: "u9fdyoucukauvfgx",
  password: "TOKIQXyNm2iXYFd8HHMR",
  database: "bz19wlktes4tn01bh54y",
});

module.exports = mysqlConnection;
