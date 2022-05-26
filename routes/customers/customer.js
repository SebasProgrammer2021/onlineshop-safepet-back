const express = require("express");
const mysqlConnection = require("../../mysql/config");

function getAllCustomers() {
  return new Promise((resolve, reject) => {
    const sqlSentence = "SELECT * FROM cliente";
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function getCustomerbyId(cedula) {
  return new Promise((resolve, reject) => {
    let sqlSentence = `SELECT * FROM cliente WHERE cliente.cedula = ${cedula}`;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function getCopago(cedula) {
  return new Promise((resolve, reject) => {
    let sqlSentence = `SELECT copago FROM cliente inner join plan 
    on cliente.plan_idPlan = plan.idPlan
    where cliente.cedula = ${cedula}`;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function addCustomer(data) {
  return new Promise((resolve, reject) => {
    const sqlSentence = "INSERT INTO cliente SET ?";
    let query = mysqlConnection.format(sqlSentence, data);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function relationCustomerBenefits(data) {
  return new Promise((resolve, reject) => {
    let sqlSentence = `INSERT INTO plan_beneficio SET ?`;
    let query = mysqlConnection.format(sqlSentence, data);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function deleteCustomerById(cedula) {
  return new Promise((resolve, reject) => {
    let sqlSentence = `DELETE FROM cliente WHERE cedula = ${cedula}`;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if(error) reject(error);
      resolve(result);
    });
  });
}

function updateCustomer(customer){
  return new Promise((resolve, reject) => {
    let {cedula} = customer.params;
    let {nombre, apellido, direccion, telefono} = customer.body;
    let sqlSentence = `UPDATE cliente SET nombre = '${nombre}', apellido = '${apellido}', direccion = '${direccion}', telefono = '${telefono}'  WHERE cedula = ${cedula}`;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if(error) reject(error);
      resolve(result);
    })
  })
}

module.exports = {
  getAllCustomers,
  addCustomer,
  relationCustomerBenefits,
  getCustomerbyId,
  getCopago,
  deleteCustomerById,
  updateCustomer,
};
