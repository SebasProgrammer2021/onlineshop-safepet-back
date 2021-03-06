const petController = module.exports;
const petQuerys = require("../routes/pets/pet");

petController.addPet = async (req, res) => {
  const { nombre, edad, raza, idPlan, idCliente } = req.body;

  const pet = {
    nombre,
    edad,
    raza,
    cliente_idCliente: idCliente,
    plan_idPlan: idPlan,
  };

  try {
    let resPlanRegistration = await petQuerys.addPet(pet);

    return res.status(200).json({
      status: "Successful registration",
      registro: true,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Erron on save Pet",
      error,
      reg: true,
    });
  }
};

petController.getAll = async (req, res) => {
  try {
    let planList = await petQuerys.getAll();
    return res.status(200).json({
      data: planList,
      status: 200,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Erron listing Pet",
      error,
      reg: true,
    });
  }
};

petController.getPetByid = async (req, res) => {
  let {id} = req.params;
  try {
    let petList = await petQuerys.getPetByid(id);
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

petController.getCustomerByPet = async (req, res) => {
  let {id} = req.params;
  try {
    let petList = await petQuerys.getCustomerByPet(id);
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

petController.deletePetByid = async (req, res) => {
  let {id} = req.params;
  try {
    let petList = await petQuerys.deletePetByid(id);
    return res.status(200).json({
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

petController.updatePetByid = async (req, res) => {
  try {
    let petList = await petQuerys.updatePetByid(req);
    return res.status(200).json({
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
