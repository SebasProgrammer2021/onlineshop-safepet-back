const express = require("express");
// const benefit = express.Router();
// const mysqlConnection = require("../../mysql/config");
const customerControllers = module.exports;
const consultas = require("../routes/bd");

const customer = require("../routes/customers/customer");
const benefit = require("../routes/benefits/benefits");

customerControllers.addCustomerWithBenefits = async (req, res) => {
  const { cedula, nombre, apellido, direccion, telefono, beneficios } =
    req.body;

  const customer = {
    cedula,
    nombre,
    apellido,
    direccion,
    telefono,
  };

  try {
    let resCustomerRegistration = await consultas.registerCustomer(customer);
    for (const benefitId in beneficios) {
      let relation = {
        cliente_cedula: cedula,
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
