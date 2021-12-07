const mysqlConnection = require("../mysql/config");

function registerCustomer(data) {
  return new Promise((resolve, reject) => {
    let insert = `INSERT INTO Cliente SET ?`;
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
    let sqlSentence = `SELECT * FROM Cliente`;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function getCopago(cedula) {
  return new Promise((resolve, reject) => {
    let sqlSentence = `SELECT copago FROM Cliente inner join Plan 
    on Cliente.plan_idPlan = Plan.idPlan
    where Cliente.cedula = ${cedula}`;
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
