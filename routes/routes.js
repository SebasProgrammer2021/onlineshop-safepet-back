const express = require("express");
const router = express.Router();
// const mysqlConnection = require("../mysql/config");
const customerController = require("../controllers/customers");

router.get("/", (req, res) => {
  res.send("Welcome to my API");
});

router.post("/add", customerController.addCustomerWithBenefits);
// router.post("/update", customerController.eliminar);
// router.post("/delete", customerController.addCustomerWithBenefits);




module.exports = router;
