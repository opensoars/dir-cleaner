var assert = require('assert');

describe('Helper functions', function (){
  describe('#ensureObject', function (){
    var ensureObject = require('./../../lib/helpers/ensureObject.js');

    describe('##Requiring the module', function (){
      it('returns a function', function (){
        assert.equal(typeof ensureObject, 'function');
      });
    });
    describe('##Using the function', function (){
      it('returns the same empty object when argument 1 is an empty object', function (){
        var empty_object = {};
        assert.equal(ensureObject(empty_object), empty_object);
      });
      it('returns the same object when argument 1 is an object', function (){
        var filled_object = { a: 'b', c: 'd' }
      });
    });

  });
});