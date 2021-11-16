const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3050;

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "onlineShop",
});
// testchange
//routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// all customers
app.get("/customers", (req, res) => {
  const sql = "SELECT * FROM cliente";
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("no results");
    }
  });
});

app.get("/customers/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM cliente WHERE idCliente = ${id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send("no results");
    }
  });
});

app.post("/add", (req, res) => {
  const sql = "INSERT INTO cliente SET ?";

  const customer = {
    name: req.body.name,
    city: req.body.city,
  };

  connection.query(sql, customer, (error) => {
    if (error) throw error;

    res.send({ status: 200, message: "CLIENTE_CREADO" });
  });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, city } = req.body;

  const sql = `UPDATE cliente SET name = '${name}', city = '${city}' WHERE idCliente = ${id}`;

  connection.query(sql, (error) => {
    if (error) throw error;

    res.send({ status: 200, message: "CLIENTE_ACTUALIZADO" });
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM cliente WHERE idCliente = ${id}`;

  connection.query(sql, (error) => {
    if (error) throw error;

    res.send({ status: 200, message: "CLIENTE_BORRADO" });
  });
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Database server running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
