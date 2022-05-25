const mysqlConnection = require("../../mysql/config");

// add Benefit
function addBenefit(data) {
  return new Promise((resolve, reject) => {
    const sqlSentence = "INSERT INTO beneficio SET ?";
    let query = mysqlConnection.format(sqlSentence, data);

    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

// Get all Benefits
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

//Get Pet by Id
function getBenefitByid(id) {
  return new Promise((resolve, reject) => {
    const sqlSentence = `select * from beneficio WHERE idBeneficio = ${id}`;
    
    let query = mysqlConnection.format(sqlSentence);
    console.log(query.length,"benefit");
   // if (query.length == 45) {
      mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
  //  }else{
  //    console.log("No existe beneficio");
 // }
      
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

//Delete Benefits by Id
function deleteBenefitByid(id) {
  return new Promise((resolve, reject) => {
    const sqlSentence = `DELETE from beneficio WHERE idBeneficio = ${id}`;
    let query = mysqlConnection.format(sqlSentence);
    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

//Update Benefits by Id
function updateBenefitByid(obj) {
  return new Promise((resolve, reject) => {
    const {id} = obj.params;
    const {nombre, costo} = obj.body;
    const sqlSentence = `UPDATE beneficio SET nombre = '${nombre}', costo = '${costo}'
    WHERE idBeneficio = ${id} `;
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
  addBenefit,
  getBenefitByid,
  updateBenefitByid,
  deleteBenefitByid,
};

