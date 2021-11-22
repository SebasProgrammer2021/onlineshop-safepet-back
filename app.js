const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3050;
const mysqlConnection = require("./mysql/config");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/benefit", require("./routes/routes"));
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
