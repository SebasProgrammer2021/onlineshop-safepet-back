const express = require("express");
const mysqlConnection = require("../../mysql/config");

function addPet(data) {

  return new Promise((resolve, reject) => {
    const sqlSentence = "INSERT INTO beneficiario SET ?";
    let query = mysqlConnection.format(sqlSentence, data);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    const sqlSentence = "SELECT * FROM beneficiario";
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function getPetByid(id) {

  return new Promise((resolve, reject) => {
    const sqlSentence = `select * from beneficiario WHERE idBeneficiario = ${id}`;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function getCustomerByPet(id) {

  return new Promise((resolve, reject) => {
    const sqlSentence = `select * from beneficiario inner join cliente 
    on beneficiario.cliente_idCliente = cliente.cedula WHERE idBeneficiario = ${id}`;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function deletePetByid(id) {

  return new Promise((resolve, reject) => {
    const sqlSentence = `DELETE from beneficiario WHERE idBeneficiario = ${id}`;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function updatePetByid(obj) {

  return new Promise((resolve, reject) => {
    const {id} = obj.params;
    const {nombre, edad, raza} = obj.body;
    const sqlSentence = `UPDATE beneficiario SET nombre = '${nombre}', edad = '${edad}',
     raza = '${raza}' WHERE idBeneficiario = ${id} `;
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
  getPetByid,
  deletePetByid,
  updatePetByid,
  getCustomerByPet,
};
