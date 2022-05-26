const express = require("express");
const router = express.Router();
const customerController = require("../../controllers/customers");
const benefitController = require("../../controllers/benefits");

router.get("/getById/:cedula",customerController.getCustomerbyId);
router.get("/getAllCustomers", customerController.getAllCustomer);
router.get("/consultCopago/:cedula",customerController.getCopago);
router.post("/addCustomer", customerController.addCustomerWithBenefits);
router.delete("/deleteCustomer/:cedula", customerController.deleteCustomerById);
router.put("/updateCustomer/:cedula", customerController.updateCustomer);

module.exports = router;
