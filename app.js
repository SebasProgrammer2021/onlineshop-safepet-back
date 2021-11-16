const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3050;
const mysqlConnection = require("./mysql/config");
const app = express();
app.use(bodyParser.json());

//routes
// const customer = require("./routes/customers/customer");
const benefit = require("./routes/benefits/benefits");

// app.use("/customer", customer);
app.use("/benefit", benefit);
app.use("/customer", require("./routes/routes"));

mysqlConnection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Database server running");
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
