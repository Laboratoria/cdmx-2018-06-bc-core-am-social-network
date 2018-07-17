// Ejecuta tu test 
const { assert } = require('chai');
const inputNotEmpty = require('../src/js/index.js');

describe('inputNotEmpty()', () => {
  it('Deberia ser una función', () => {
    assertEqual(typeof inputNotEmpty, 'function');
  });
  it('Debería retornar true en caso de que el input no este vacio', ()=>{

  });
}); 