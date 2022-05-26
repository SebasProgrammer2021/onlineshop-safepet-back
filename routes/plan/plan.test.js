const plan = require('./plan');
module.exports = {
  testEnvironment: "node",
};

describe("Se prueban valores puntuales de la tabla plan", () => {
  test("Retorna el registro 100000 de la tabla  extrayendo el copago", async () => {
    return plan.getAll().then((data) => {
      let response = data[0].copago;
      expect(response).toBe(100000);
    });
  });

  test("Retorna el registro 60000  de la tabla  extrayendo el copago", async () => {
    return plan.getAll().then((data) => {
      let response = data[4].copago;
      expect(response).toBe(60000);
    });
  });

  test("Retorna el registro 8000 de la tabla  extrayendo el copago", async () => {
    return plan.getAll().then((data) => {
      let response = data[7].copago;
      expect(response).toBe(8000);
    });
  });
});