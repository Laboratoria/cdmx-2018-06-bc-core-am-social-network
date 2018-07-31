// Ejecuta tu test 
describe('data', () => {
    it('debería exponer función onload en objeto global', () => {
        assert.isFunction(onload);
    });

});
describe('btnSign', () => {
    it('es una funcion', () => {
        assert.isFunction(btnSign);
        it('debería permitir ingresar nuevo usuario', () => {
            assert.isFuntction(auhtFacebook);
        })

    });
});
describe('btnSignup', () => {
    it('debería ser una función que crea un nuevo usuario', () => {
        assert.isFunction(btnSignup);
    });
});
