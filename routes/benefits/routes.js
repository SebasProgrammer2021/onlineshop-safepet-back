const express = require("express");
const router = express.Router();
const benefitController = require("../../controllers/benefits");

router.get("/getAll", benefitController.getAll);
router.delete("/deleteAll", benefitController.deleteAll);

// app.get('/download', function (req, res) {
//   var file = '../static/contratoTrato_ex.doc';
//   res.download(file); // Set disposition and send it. });

module.exports = router;
