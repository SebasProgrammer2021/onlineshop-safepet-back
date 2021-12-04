const express = require("express");
// const benefit = express.Router();
// const mysqlConnection = require("../../mysql/config");
const customerControllers = module.exports;
const consultas = require("../routes/bd");
const planController = require("./plan");
// console.log(planController.calculateCopago(1600000));

customerControllers.addCustomerWithBenefits = async (req, res) => {
  const { cedula, nombre, apellido, direccion, telefono } = req.body;

  const customer = {
    cedula,
    nombre,
    apellido,
    direccion,
    telefono,
  };

  try {
    let resCustomerRegistration = await consultas.registerCustomer(customer);
    // for (const benefitId in beneficios) {
    //   let relation = {
    //     cliente_cedula: cedula,
    //     beneficio_idBeneficio: beneficios[benefitId],
    //   };
    //   let b = await consultas.relationCustomerBenefits(relation);
    // }

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
    let customersList = await consultas.getAllCustomers();

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
