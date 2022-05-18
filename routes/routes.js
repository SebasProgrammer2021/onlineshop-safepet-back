const express = require("express");
const router = express.Router();
// const mysqlConnection = require("../mysql/config");
const customerController = require("../controllers/customers");
const benefitController = require("../controllers/benefits");


router.get("/", (req, res) => {
  res.send("Welcome to SAFEPET API");
});
router.post("/add", customerController.addCustomerWithBenefits);
router.get("/getAll", customerController.getAll);
router.post("/consultCopago",customerController.getCopago);

// // benefits
// router.get("/getAll", benefitController.getAll);
// router.delete("/deleteAll", benefitController.deleteAll);

// app.get('/download', function (req, res) {
//   var file = '../static/contratoTrato_ex.doc';
//   res.download(file); // Set disposition and send it. });

Fuente: https://www.iteramos.com/pregunta/29109/descargue-un-archivo-del-servidor-nodejs-usando-el-express




module.exports = router;
