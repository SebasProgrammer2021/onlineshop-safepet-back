// const express = require("express");
// const mysqlConnection = require("../../mysql/config");
const planController = module.exports;
const planQuerys = require("../routes/plan/plan");

planController.addPlan = async (req, res) => {
  const { copago, valor } = req.body;

  const plan = {
    copago,
    valor,
  };

  try {
    let resPlanRegistration = await planQuerys.addPlan(plan);
    console.log(resPlanRegistration.insertId, "plan resg");

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

planController.getAll = async (req, res) => {
  try {
    let planList = await planQuerys.getAll();

    return res.status(200).json({
      data: planList,
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

planController.calculateCopago = (planValue) => {
  let copago = false;

  if (planValue > 0 && planValue <= 500000) {
    return (copago = 5000);
  }
  if (planValue > 500000 && planValue <= 1000000) {
    return (copago = 10000);
  }
  if (planValue > 1000000) {
    return (copago = 15000);
  }
};
