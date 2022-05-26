const express = require("express");
const router = express.Router();
const planController = require("../../controllers/plan");

router.post("/add", planController.addPlan);
router.get("/getAll", planController.getAll);
router.get("/getPlanByid/:id", planController.getPlanByid);
router.delete("/deletePlanByid/:id", planController.deletePlanByid);
router.put("/updatePlanByid/:id", planController.updatePlanByid);

// app.get('/download', function (req, res) {
//   var file = '../static/contratoTrato_ex.doc';
//   res.download(file); // Set disposition and send it. });

module.exports = router;
