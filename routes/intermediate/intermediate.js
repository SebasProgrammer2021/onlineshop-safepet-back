const express = require("express");
const benefit = express.Router();
const mysqlConnection = require("../../mysql/config");

// all customers
benefit.get("/getAll", (req, res) => {
  const sql = "SELECT * FROM beneficio";
  mysqlConnection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("no results");
    }
  });
});

module.exports = benefit;
