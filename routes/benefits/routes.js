const express = require("express");
var cors = require('cors')
const router = express.Router();
const benefitController = require("../../controllers/benefits");

var corsOptions = {
    origin: 'http://localhost:3050',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

router.get("/getAll", cors(corsOptions), benefitController.getAll);
router.delete("/deleteAll",  benefitController.deleteAll);

// app.get('/download', function (req, res) {
//   var file = '../static/contratoTrato_ex.doc';
//   res.download(file); // Set disposition and send it. });

module.exports = router;
