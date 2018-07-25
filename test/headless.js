// Configura tus test para usarlos
global.window = global;
global.assert = require('chai').assert;
global.fixtures = {
  users: require('../data/laboratoria.json'),
};
require('../src/js/data');
require('./data.spec.js');

