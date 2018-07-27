// Ejecuta tu test
import { expect } from 'chai';
import { authGoogle } from '../src/js/index.js';
describe('index', () => { // es el data.js

  it('authGoogle debería ser una función', () => {
    assert.equal(typeof authGoogle, 'function');
  });
}
