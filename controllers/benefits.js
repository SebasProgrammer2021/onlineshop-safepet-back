const express = require("express");
const benefitController = module.exports;
const benefitQuerys = require("../routes/benefits/benefits");

benefitController.addBenefit = async (req, res) => {
  const { nombre, costo } = req.body;
  const benefit = {
    nombre,
    costo,
  };

  try {
    let resBenefitRegistration = await benefitQuerys.addBenefit(benefit);
    return res.status(200).json({
      status: "Successful registration",
      registro: true,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Erron on save",
      error,
      reg: true,
    });
  }
};

benefitController.getAll = async (req, res) => {
  try {
    let getAllBenefits = await benefitQuerys.getAllBenefits();
    return res.status(200).json({
      data: getAllBenefits,
      status: 200,
    });
  } catch (error) {
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
    return res.status(200).json({
      message: "ALL_BENEFITS_DELETED"
    });
  } catch (error) {
    return res.status(400).json({
      status: "Erron on save",
      error,
      reg: true,
    });
  }
};

benefitController.getBenefitByid = async (req, res) => {
  let {id} = req.params;
  try {
    let benefitList = await benefitQuerys.getBenefitByid(id);
    if (benefitList != null) {
      return res.status(200).json({
        data: benefitList,
        status: 200,
      });
    }
    
  } catch (error) {
    return res.status(400).json({
      status: "Erron on save",
      error,
      reg: true,
    });
  }
};

benefitController.deleteBenefitByid = async (req, res) => {
  let {id} = req.params;
  try {
    let petList = await benefitQuerys.deleteBenefitByid(id);
    return res.status(200).json({
      data: petList,
      status: 200,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Erron on save",
      error,
      reg: true,
    });
  }
};

benefitController.updateBenefitByid = async (req, res) => {
  try {
    let petList = await benefitQuerys.updateBenefitByid(req);
    return res.status(200).json({
      data: petList,
      status: 200,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Erron on save",
      error,
      reg: true,
    });
  }
};

