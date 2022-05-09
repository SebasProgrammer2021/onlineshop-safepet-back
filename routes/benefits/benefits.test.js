const benefits = require('./benefits');

test('Me retorna la tabla beneficios', async () => {
    return benefits.getAllBenefits().then(data => {
      expect(data).isObject;
    });
    
  });

  test('Me retorna la tabla cliente_beneficios', async () => {
    return benefits.deleteAllBenefits().then(data => {
      expect(data).isObject;
    });
    
  });