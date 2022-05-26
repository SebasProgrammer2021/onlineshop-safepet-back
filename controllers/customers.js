const express = require("express");
const customerControllers = module.exports;
const consultas = require("../routes/bd");
const planController = require("./plan");
const planQuerys = require("../routes/plan/plan");
const petQuerys = require("../routes/pets/pet");
const customerQuerys = require("../routes/customers/customer");


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

  try 
  {
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

    let resCustomerRegistration = await customerQuerys.addCustomer(customer);

    for (const benefitId in beneficios) {
      let relation = {
        plan_idPlan: planId,
        beneficio_idBeneficio: beneficios[benefitId],
      };
      let benefitCustomer = await customerQuerys.relationCustomerBenefits(relation);
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
      status: "Successful registration customer"
    });
  } catch (error) {
    return res.status(400).json({
      status: "Erron on save customer",
      error,
      reg: true,
    });
  }
};

customerControllers.getAllCustomer = async (req, res) => {
  try {
    let customersList = await customerQuerys.getAllCustomers();

    return res.status(200).json({
      data: customersList,
      status: 200,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Erron listing customer",
      error,
      reg: true,
    });
  }
};

customerControllers.getCopago = async (req, res) => {
  let cedula = req.params.cedula;

  try {
    let customersList = await customerQuerys.getCopago(cedula);

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

customerControllers.getCustomerbyId = async (req, res) => {

  let customerId = req.params.cedula;

  try {
    let customersList = await customerQuerys.getCustomerbyId(customerId);

    return res.status(200).json({
      data: customersList,
      status: 200,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Error on consult customer",
      error,
      reg: true,
    });
  }
};

customerControllers.deleteCustomerById = async (req, res) => {
  let customerId = req.params.cedula;
  try {
    let customerToDelete = await customerQuerys.deleteCustomerById(customerId);

    return res.status(200).json({
      data: "Cliente eliminado", customerId,
      status: 200,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Error on delete customer",
      error,
      reg: true,
    });
  }
}

customerControllers.updateCustomer = async (req, res) => {
  try {
    let customerUpdated = await customerQuerys.updateCustomer(req);
    return res.status(200).json({
      info: "Se actualizo",
      cedula_cliente: req.params.cedula,
      status: 200,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error al actualizar cliente",
      error,
      reg: true,
    });
    
  }
}
