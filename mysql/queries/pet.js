const express = require("express");
const mysqlConnection = require("../../mysql/config");

function addPet(data) {

  return new Promise((resolve, reject) => {
    const sqlSentence = "INSERT INTO Beneficiario SET ?";
    let query = mysqlConnection.format(sqlSentence, data);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    const sqlSentence = "SELECT * FROM Beneficiario";
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

module.exports = {
  addPet,
  getAll,
};
