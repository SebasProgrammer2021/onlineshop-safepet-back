const express = require("express");
const customer = express.Router();
const mysqlConnection = require("../../mysql/config");

// all customers
customer.get("/getAll", (req, res) => {
  const sql = "SELECT * FROM cliente";
  mysqlConnection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("no results");
    }
  });
});

customer.get("/customers/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM cliente WHERE idCliente = ${id}`;
  mysqlConnection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send("no results");
    }
  });
});

customer.post("/add", (req, res) => {
  const sql = "INSERT INTO cliente SET ?";
  const sqlClienteBeneficio = "INSERT INTO cliente_beneficio SET ?";
  const consult = "SELECT * FROM beneficio";

  const customer = {
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
  };

  mysqlConnection.query(sql, customer, (error) => {
    if (error) throw error;

    res.send({ status: 200, message: "CLIENTE_CREADO" });
  });
});

customer.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, city } = req.body;

  const sql = `UPDATE cliente SET name = '${name}', city = '${city}' WHERE idCliente = ${id}`;

  mysqlConnection.query(sql, (error) => {
    if (error) throw error;

    res.send({ status: 200, message: "CLIENTE_ACTUALIZADO" });
  });
});

customer.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM cliente WHERE idCliente = ${id}`;

  mysqlConnection.query(sql, (error) => {
    if (error) throw error;

    res.send({ status: 200, message: "CLIENTE_BORRADO" });
  });
});

module.exports = customer;