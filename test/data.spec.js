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
            assert._______(btnSign);
        })
    });
});
describe('btnSignup', () => {
    it('es una funcion', () => {
        assert.isFunction(btnSignup);
        it('debería permitir crear nuevo usuario', () => {
            assert._______(btnSignup);
        })
    });
});
