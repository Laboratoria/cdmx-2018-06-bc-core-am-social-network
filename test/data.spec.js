// Ejecuta tu test 

// Ejecuta tu test 
// 1.Start by writing a test
// 2.Run the test and any other tests. At this point, your newly added test should fail. If it doesn’t fail here, it might not be testing the right thing and thus has a bug in it.
// 3.Write the minimum amount of code required to make the test pass
// 4.Run the tests to check the new test passes
// 5.Optionally refactor your code
// 6.Repeat from 1


// AQUI VAN LOS ITS Y ASSERTS
describe('registrar()', () => {
  it('debería ser una función', () => {
    assert.equal(typeof 'registrar()', 'function');
  });
});
