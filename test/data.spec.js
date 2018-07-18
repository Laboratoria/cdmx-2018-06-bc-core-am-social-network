// Ejecuta tu test 
const {assert} = require('chai');
const{inputNotEmpty} = require ('../src/js/index.js');

describe('inputNotEmpty()', ()=>{
    it ('deberia ser una funcion', ()=>{
        assert.equal(typeof inputNotEmpty, 'function')
    })
    it('deberia return true en caso de el input no este vacio')
})
it  