const express = require("express");
const cors = require ('cors');
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3050;
const mysqlConnection = require("./mysql/config");
const app = express();
const rateLimit = require('express-rate-limit');
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/benefit", require("./routes/benefits/routes"));
app.use("/customer", require("./routes/customers/routes"));
app.use("/plan", require("./routes/plan/routes"));
app.use("/pet", require("./routes/pets/routes"));
app.use(cors(
    { origin: "https://backsafepet.herokuapp.com" }
  )
);

// set up rate limiter: maximum of five requests per minute
const limiter = rateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 15
});

// apply rate limiter to all requests
app.use(limiter);

app.get('/:path', function(req, res) {
  let path = req.params.path;
  if (isValidPath(path))
    res.sendFile(path);
});



mysqlConnection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Database server running");
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

