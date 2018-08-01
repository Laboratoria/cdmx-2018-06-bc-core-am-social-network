// Ejecuta tu test 
describe('socialNetwork', () => {
    it('deberia ser un objeto', () => {
      assert.equal(typeof socialNetwork, 'object');
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
  
  