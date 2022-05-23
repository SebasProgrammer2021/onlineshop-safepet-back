const plan = require('./plan');
//modifacar test unitarios
test('Me retorna la tabla plan', async () => {
    return plan.getAll().then(data => {
      expect(data).isObject;
    });
    
  });

test('Agrega objeto a la tabla plan', async () => {
  //objeto de prueba
  var myobject ={
    copago: 2000,
    valor: 5000
  };
    return plan.addPlan(myobject).then(data => {
      expect(data).isObject;
    });
    
  });