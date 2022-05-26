const plan = require('./plan');
//modifacar test unitarios
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

//revisar los errores de valores duplicados
describe("Validamos que si esta tomando los datos de la tabla", () => {
  test("Comprobamos que los objetos son iguales", async () => {
    return plan.getAll().then((data) => {
      let register = [
        { idPlan: 1, copago: 100000, valor: 215000 },
        { idPlan: 2, copago: 100000, valor: 275000 },
        { idPlan: 3, copago: 50000, valor: 400000 },
        { idPlan: 4, copago: 90000, valor: 900000 },
        { idPlan: 5, copago: 60000, valor: 400000 },
        { idPlan: 6, copago: 60000, valor: 455000 },
        { idPlan: 7, copago: 5000, valor: 425000 },
        { idPlan: 8, copago: 8000, valor: 16000 },
        { idPlan: 9, copago: 8000, valor: 16000 },
        { idPlan: 10, copago: 8000, valor: 16000 },
        { idPlan: 11, copago: 8000, valor: 16000 },
        { idPlan: 13, copago: 8000, valor: 16000 },
        { idPlan: 14, copago: 8000, valor: 16000 },
        { idPlan: 18, copago: 5000, valor: 192000 },
        { idPlan: 31, copago: 5000, valor: 170000 },
        
      ];
      expect(data).toEqual(register);
    });
  });
});