// Configura tus test para usarlos

global.window = global;
global.assert = require('chai').assert;
require('../src/js/data.js');
require('./data.spec.js');
