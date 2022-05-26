const benefits = require("./benefits");

module.exports = {
  testEnvironment: "node",
};

describe("Se prueban valores puntuales de la tabla benefits", () => {
  test("Retorna el registro Consultas generales de la tabla  extrayendo el nombre", async () => {
    return benefits.getAllBenefits().then((data) => {
      let response = data[0].nombre;
      expect(response).toBe("Consultas generales");
    });
  });

  test("Retorna el registro Transporte en caso de emergencia de la tabla  extrayendo el nombre", async () => {
    return benefits.getAllBenefits().then((data) => {
      let response = data[4].nombre;
      expect(response).toBe("Transporte en caso de emergencia");
    });
  });

  test("Retorna el registro Medicamentos de la tabla  extrayendo el nombre", async () => {
    return benefits.getAllBenefits().then((data) => {
      let response = data[7].nombre;
      expect(response).toBe("Medicamentos");
    });
  });
});

describe("Validamos que si esta tomando los datos de la tabla", () => {
  test("Comprobamos que los objetos son iguales", async () => {
    return benefits.getAllBenefits().then((data) => {
      let register = [
        { idBeneficio: 1, nombre: "Consultas generales", costo: 150000 },
        { idBeneficio: 2, nombre: "Spa uñas", costo: 50000 },
        { idBeneficio: 3, nombre: "Spa corte pelo", costo: 15000 },
        { idBeneficio: 4, nombre: "Fiesta de cumpleaños", costo: 45000 },
        { idBeneficio: 5, nombre: "Transporte en caso de emergencia", costo: 80000 },
        { idBeneficio: 6, nombre: "Seguro todo riesgo", costo: 300000 },
        { idBeneficio: 7, nombre: "Servicio funebre", costo: 73000 },
        { idBeneficio: 8, nombre: "Medicamentos", costo: 30000 },
        { idBeneficio: 9, nombre: "Consultas especializadas", costo: 42000 },
        { idBeneficio: 10, nombre: "Atención preferencial", costo: 20000 },
      ];
      expect(data).toEqual(register);
    });
  });
});