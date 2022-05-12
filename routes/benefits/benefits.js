const mysqlConnection = require("../../mysql/config");

// all customers
function getAllBenefits() {
  return new Promise((resolve, reject) => {
    let sqlSentence = `SELECT * FROM beneficio`;
    let query = mysqlConnection.format(sqlSentence);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function deleteAllBenefits() {
  return new Promise((resolve, reject) => {
    let sqlSentence1 = `DELETE FROM cliente_beneficio`;
    let query1 = mysqlConnection.format(sqlSentence1);
    mysqlConnection.query(query1, (error, result) => {
      if (error) reject(error);
    });

    let sqlSentence = `DELETE FROM beneficio`;
    let query = mysqlConnection.format(sqlSentence);
    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

module.exports = {
  deleteAllBenefits,
  getAllBenefits,
};

