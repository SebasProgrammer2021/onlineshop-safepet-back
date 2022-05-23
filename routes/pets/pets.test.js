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

