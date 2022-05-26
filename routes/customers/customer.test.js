const customer = require("./customer");

module.exports = {
  testEnviroment: "node",
};

describe("Se prueba valores puntuales de la tabal benefits", () => {
  test("Retorna el registro de la tabla  cliente extrayendo el nombre del primer registro", async () => {
    return customer.getAllCustomers().then((data) => {
      let response = data[0].nombre;
      expect(response).toBe("Sebastian");
    });
  });

  test("Retorna el registro de la tabla  cliente extrayendo el nombre de un valor intermedio", async () => {
    return customer.getAllCustomers().then((data) => {
      let response = data[3].nombre;
      expect(response).toBe("Jesus");
    });
  });
});

describe("Se consulta cliente por numero de cedula", () => {
  test("Retorna el registro del cliente con cedula 10000001", async () => {
    return customer.getCustomerbyId(10000001).then((data) => {
      let response = data[0].nombre;
      expect(response).toBe("Sebastian");
    });
  });
});

describe("Se consulta copago del cliente", () => {
  test("Retorna el registro del cliente con cedula 10000001", async () => {
    return customer.getCopago(10000001).then((data) => {
      let response = data[0].copago;
      expect(response).toBe(100000);
    });
  });
});
