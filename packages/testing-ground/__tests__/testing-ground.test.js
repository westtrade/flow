'use strict';

const testingGround = require('..');
const assert = require('assert').strict;

assert.strictEqual(testingGround(), 'Hello from testingGround');
console.info('testingGround tests passed');
