const express = require("express");
const mysqlConnection = require("../../mysql/config");
const pet = require("../pets/pet")
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

function getPlanByid2(id) {

  return new Promise((resolve, reject) => {
    const sqlSentence = `SELECT idPlan, plan.valor FROM cliente join plan on cliente.plan_idPlan = plan.idPlan
    WHERE cliente.cedula = ${id}`;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function getPlanCustomerPetByid(id) {
  console.log(id, "id-env");
var idCustomer = Object.values(id);
console.log(idCustomer, "id");
  return new Promise((resolve, reject) => {
    const sqlSentence = `SELECT * FROM beneficiario inner join plan 
    ON beneficiario.plan_idPlan = plan.idPlan inner JOIN cliente 
    ON beneficiario.cliente_idCliente = cliente.cedula WHERE cliente.cedula = ${idCustomer}`;
    console.log(sqlSentence,"consulta");
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
  /*let cedula = obj.params;
  console.log(cedula,"PLAN");
  let cuerpo = obj.body;

    let valorPlan = getPlanByid2(Object.values(cedula));
    console.log(valorPlan,"PLAN2");
    let re = updatePlanByid2(valorPlan);
    console.log(re,"PLAN3");*/
    const {id} = valorPlan.params;
    const {valor} = valorPlan.body;
    const sqlSentence = `UPDATE plan SET  valor = '${valor}' WHERE idPlan = ${id} `;
    let query = mysqlConnection.format(sqlSentence);
    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
    //pet.addPet(cuerpo);
}

function updatePlanByid2(obj) {
  console.log(obj.result,"PLAN4");
    const {idPlan} = obj.params;
    const {valor} = obj.body;
    console.log(idPlan,"PLAN4");
    console.log(valor,"PLAN4");
    const sqlSentence = `UPDATE plan SET  valor = '${valor}' WHERE idPlan = ${idPlan} `;
    let query = mysqlConnection.format(sqlSentence);
    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
}

module.exports = {
  addPlan,
  getAll,
  getPlanByid,
  deletePlanByid,
  updatePlanByid,
  updatePlanByid2,
  getPlanCustomerPetByid,
};
