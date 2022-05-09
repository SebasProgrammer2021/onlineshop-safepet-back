const plan = require('./plan');

test('Me retorna la tabla plan', async () => {
    return plan.getAll().then(data => {
      expect(data).isObject;
    });
    
  });

test('agrega objeto a la tabla plan', async () => {
  //objeto de prueba
  var myobject ={
    id: 12,
    nombre: 'Raul'
  };
    return plan.addPlan(myobject).then(data => {
      expect(data).isObject;
    });
    
  });