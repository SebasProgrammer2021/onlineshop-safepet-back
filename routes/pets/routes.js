const express = require("express");
const router = express.Router();
const petController = require("../../controllers/pet");

router.post("/add", petController.addPet);
router.get("/getAll", petController.getAll);

// app.get('/download', function (req, res) {
//   var file = '../static/contratoTrato_ex.doc';
//   res.download(file); // Set disposition and send it. });

module.exports = router;
