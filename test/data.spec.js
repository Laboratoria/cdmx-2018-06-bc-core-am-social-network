// Crea y ejecuta test
describe('socialNetwork', () => {
  it('deberia ser un objeto', () => {
    // assert.equal prueba si dos valores son iguales
    assert.equal(typeof socialNetwork, 'object');
    // typeof indica el tipo de operador
  });

  describe('socialNetwork.loginUser', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof socialNetwork.loginUser, 'function');
    });
  });

  describe('socialNetwork.loginWithGoogle', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof socialNetwork.loginUser, 'function');
    });
  });

  describe('socialNetwork.loginWithFacebook', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof socialNetwork.loginUser, 'function');
    });
  });

  describe('socialNetwork.registerUser', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof socialNetwork.loginUser, 'function');
    });
  });

  describe('socialNetwork.signOut', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof socialNetwork.loginUser, 'function');
    });
  });
});

