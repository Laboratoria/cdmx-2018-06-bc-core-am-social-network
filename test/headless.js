// Configura tus test para usarlos
global.window = global;
global.assert = require('chai').assert;
require('../src/login');
require('./data.spec.js');
