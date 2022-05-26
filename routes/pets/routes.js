const express = require("express");
const router = express.Router();
const petController = require("../../controllers/pet");

router.post("/addPet", petController.addPet);
router.get("/getAllPets", petController.getAll);
router.get("/getPetByid/:id", petController.getPetByid);
router.get("/getCustomerByPet/:id", petController.getCustomerByPet);
router.delete("/deletePetByid/:id", petController.deletePetByid);
router.put("/updatePetByid/:id", petController.updatePetByid);

module.exports = router;
