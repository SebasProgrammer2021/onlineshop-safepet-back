const express = require("express");
// const benefit = express.Router();
// const mysqlConnection = require("../../mysql/config");
const benefitController = module.exports;
const benefitQuerys = require("../routes/benefits/benefits");


benefitController.getAll = async (req, res) => {
  try {
    let getAllBenefits = await benefitQuerys.getAllBenefits();
    // console.log(getAllBenefits);
    return res.status(200).json({
      data: getAllBenefits,
      status: 200,
    });
  } catch (error) {
    // console.log(error);
    return res.status(400).json({
      status: "Erron on save",
      error,
      reg: true,
    });
  }
};

benefitController.deleteAll = async (req, res) => {
  try {
    let getAllBenefits = await benefitQuerys.deleteAllBenefits();
    // console.log(getAllBenefits);
    return res.status(200).json({
      message: "ALL_BENEFITS_DELETED"
    });
  } catch (error) {
    // console.log(error);
    return res.status(400).json({
      status: "Erron on save",
      error,
      reg: true,
    });
  }
};

