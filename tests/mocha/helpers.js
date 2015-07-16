var assert = require('assert');

describe('Helper functions', function (){
  describe('#ensureObject', function (){
    var ensureObject = require('./../../lib/helpers/ensureObject.js');

    describe('Requiring the module', function (){
      it('returns a function', function (){
        assert.equal(typeof ensureObject, 'function');
      });
    });
  });
});