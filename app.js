const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3050;
const mysqlConnection = require("./mysql/config");
//const cors = require("cors");
const app = express();
//app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/benefit", require("./routes/benefits/routes"));
app.use("/customer", require("./routes/routes"));
app.use("/plan", require("./routes/plan/routes"));
app.use("/pet", require("./routes/pets/routes"));

mysqlConnection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Database server running");
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
