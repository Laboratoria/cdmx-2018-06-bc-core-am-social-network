





















// Configura tus test para usarlos
global.window = global;
global.assert = require('chai').assert;
global.fixtures = {
  users: require('../data/firebase.json'),
};
require('../src/index');
require('./data.spec.js');
