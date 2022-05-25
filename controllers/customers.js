const express = require("express");
// const benefit = express.Router();
// const mysqlConnection = require("../../mysql/config");
const customerControllers = module.exports;
const consultas = require("../routes/bd");
const planController = require("./plan");
const planQuerys = require("../routes/plan/plan");
const petQuerys = require("../routes/pets/pet");

customerControllers.addCustomerWithBenefits = async (req, res) => {
  const {
    cedula,
    nombre,
    apellido,
    direccion,
    telefono,
    valor,
    beneficios,
    pets,
  } = req.body;
  console.log("Termina de estructurar datos.");

  try 
  {
    console.log("Inicio tru -- se calcula copago del plan");
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

    pets.map(async (e, index) => {
      let { nombre, edad, raza } = e;
      let pet = {
        nombre,
        edad,
        raza,
        cliente_idCliente: cedula,
        plan_idPlan: planId,
      };
      let respetreg = await petQuerys.addPet(pet);
    });

    return res.status(200).json({
      status: "Successful registration"
    });
  } catch (error) {
    return res.status(400).json({
      status: "Erron on save",
      error,
      reg: false,
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

customerControllers.getCopago = async (req, res) => {
  let { cedula } = req.body;
  console.log(req.body);
  try {
    let customersList = await consultas.getCopago(cedula);

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
