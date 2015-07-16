var assert = require('assert');

describe('Require and setup', function (){
  describe('#requiring the module', function (){
    var dir_cleaner = require('./../../index.js');

    it('returns a function', function (){
      assert.equal(typeof dir_cleaner, 'function');
    });
  });
});