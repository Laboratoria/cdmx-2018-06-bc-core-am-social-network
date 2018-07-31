// Ejecuta tu test
describe('userRegister', () => {

  it('debería exponer función loginGoogle en objeto global', () => {
    assert.isFunction(loginGoogle);
  });

  it('debería exponer función loginFacebook en objeto global', () => {
    assert.isFunction(loginFacebook);
  });

  it('debería exponer función loginGitHub en objeto global', () => {
    assert.isFunction(loginGitHub);
  });
