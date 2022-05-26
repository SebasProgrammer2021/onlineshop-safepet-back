const pet = require("./pet");

module.exports = {
    testEnvironment: "node"
};

describe("Se prueban valores puntuales de la base de datos", () => {
    test("Retorna el registro Ramiro de la tabla  extrayendo el nombre", async () => {
        return pet.getAll().then((data) => {
          let response = data[0].nombre;
          expect(response).toBe("Ramiro");
        });
      });

      test("Retorna el registro Duque de la tabla  extrayendo el nombre", async () => {
        return pet.getAll().then((data) => {
          let response = data[5].nombre;
          expect(response).toBe("Duque");
        });
      });
});


describe("Validamos que si esta tomando los datos de la tabla", () => {
  test("Comprobamos que los objetos son iguales", async () => {
    return pet.getAll().then((data) => {
      let register = [
        { idBeneficiario: 3, nombre: "Ramiro", edad: 16, raza: "Salchicha", "cliente_idCliente": 10000001, "plan_idPlan": 1 },
        { idBeneficiario: 4, nombre: "Burbuja", edad: 5, raza: "Dalmata", "cliente_idCliente": 10000002, "plan_idPlan": 1},
        { idBeneficiario: 5, nombre: "Silvestre", edad: 14, raza: "Golden", "cliente_idCliente": 10000003, "plan_idPlan": 1},
        { idBeneficiario: 6, nombre: "Chiquito", edad: 8, raza: "Criollo", "cliente_idCliente": 10000004, "plan_idPlan": 2},
        { idBeneficiario: 7, nombre: "Alvaro", edad: 11, raza: "Salchicha", "cliente_idCliente": 10000005, "plan_idPlan": 3 },
        { idBeneficiario: 8, nombre: "Duque", edad: 16, raza: "Criollo", "cliente_idCliente": 10000006, "plan_idPlan": 6 },
      ];
      expect(data).toEqual(register);
    });
  });
});

describe("Se prueban valores puntuales de la base de datos", () => {
  test("Retorna el registro Ramiro de la tabla  extrayendo el nombre", async () => {
      return pet.addPet().then((data) => {
        let response = data[0].nombre;
        expect(response).toBe("Ramiro");
      });
    });
  });