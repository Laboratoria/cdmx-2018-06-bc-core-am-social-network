// Configura tus test para usarlos
global.window = global;
global.assert = require('chai').assert;
/* global.fixtures = {
  users: require('../data/firebase.json'),
};*/
require('../src/js/index');
require('./index.spec.js');
