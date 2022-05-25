const express = require("express");
const mysqlConnection = require("../../mysql/config");

function addPlan(data) {
  return new Promise((resolve, reject) => {
    const sqlSentence = "INSERT INTO plan SET ?";
    let query = mysqlConnection.format(sqlSentence, data);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    const sqlSentence = "SELECT * FROM plan";
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function getPlanByid(id) {

  return new Promise((resolve, reject) => {
    const sqlSentence = `select * from plan WHERE idPlan = ${id}`;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}


function deletePlanByid(id) {

  return new Promise((resolve, reject) => {
    const sqlSentence = `DELETE from plan WHERE idPlan = ${id}`;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function updatePlanByid(obj) {

  return new Promise((resolve, reject) => {
    const {id} = obj.params;
    const {copago, valor} = obj.body;
    const sqlSentence = `UPDATE plan SET copago = '${copago}', valor = '${valor}' WHERE idPlan = ${id} `;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

module.exports = {
  addPlan,
  getAll,
  getPlanByid,
  deletePlanByid,
  updatePlanByid,
};
