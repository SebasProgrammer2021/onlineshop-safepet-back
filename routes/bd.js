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
    let insert = `INSERT INTO cliente_beneficio SET ?`;
    let query = mysqlConnection.format(insert, data);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

module.exports = {
  registerCustomer,
  relationCustomerBenefits,
};
