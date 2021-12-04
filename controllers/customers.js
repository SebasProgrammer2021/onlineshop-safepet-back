const express = require("express");
// const benefit = express.Router();
// const mysqlConnection = require("../../mysql/config");
const customerControllers = module.exports;
const consultas = require("../routes/bd");
const planController = require("./plan");
const planQuerys = require("../routes/plan/plan");

customerControllers.addCustomerWithBenefits = async (req, res) => {
  const { cedula, nombre, apellido, direccion, telefono, valor, beneficios } =
    req.body;

  try {
    const plan = {
      copago: planController.calculateCopago(valor),
      valor,
    };

    let registerPlan = await planQuerys.addPlan(plan);
    let planId = registerPlan.insertId;

    const customer = {
      cedula,
      nombre,
      apellido,
      direccion,
      telefono,
      plan_idPlan: planId,
    };

    let resCustomerRegistration = await consultas.registerCustomer(customer);

    for (const benefitId in beneficios) {
      let relation = {
        plan_idPlan: planId,
        beneficio_idBeneficio: beneficios[benefitId],
      };
      let b = await consultas.relationCustomerBenefits(relation);
    }

    return res.status(200).json({
      status: "Successful registration",
      reg: true,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Erron on save",
      error,
      reg: true,
    });
  }
};

customerControllers.getAll = async (req, res) => {
  try {
    let customersList = await consultas.getAll();

    return res.status(200).json({
      data: customersList,
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
