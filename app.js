const express = require("express");
const cors = require ('cors');
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3050;
const mysqlConnection = require("./mysql/config");
const app = express();
app.use(bodyParser.json());

//routes
app.use("/benefit", require("./routes/benefits/routes"));
app.use("/customer", require("./routes/routes"));
app.use("/plan", require("./routes/plan/routes"));
app.use("/pet", require("./routes/pets/routes"));
app.use(cors(
    { origin: "https://backsafepet.herokuapp.com" }
  )
);

mysqlConnection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Database server running");
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
