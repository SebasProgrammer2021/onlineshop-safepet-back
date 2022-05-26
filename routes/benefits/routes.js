const express = require("express");
const router = express.Router();
const benefitController = require("../../controllers/benefits");

router.post("/addBenefit", benefitController.addBenefit);
router.get("/getAll", benefitController.getAll);
router.get("/getBenefitByid/:id", benefitController.getBenefitByid);
router.delete("/deleteAll",  benefitController.deleteAll);
router.put("/updateBenefitByid/:id", benefitController.updateBenefitByid);
router.delete("/deleteBenefitByid/:id", benefitController.deleteBenefitByid);

module.exports = router;
