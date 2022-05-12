const mysqlConnection = require("../mysql/config");

function registerCustomer(data) {
  return new Promise((resolve, reject) => {
    let insert = `INSERT INTO cliente SET ?`;
    let query = mysqlConnection.format(insert, data);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function relationCustomerBenefits(data) {
  return new Promise((resolve, reject) => {
    let insert = `INSERT INTO plan_beneficio SET ?`;
    let query = mysqlConnection.format(insert, data);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    let sqlSentence = `SELECT * FROM cliente`;
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

module.exports = {
  getAll,
  registerCustomer,
  relationCustomerBenefits,
  getCopago,
};
