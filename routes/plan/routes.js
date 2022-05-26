const express = require("express");
const router = express.Router();
const planController = require("../../controllers/plan");

router.post("/add", planController.addPlan);
router.get("/getAll", planController.getAll);
router.get("/getPlanByid/:id", planController.getPlanByid);
router.delete("/deletePlanByid/:id", planController.deletePlanByid);
router.put("/updatePlanByid/:id", planController.updatePlanByid);

module.exports = router;
