const assert = require('assert');
fahmi = require('./index');
assert.doesNotThrow(()=>{fahmi({"hello":"world"})},TypeError)
