var assert = require('assert');

describe('Helper functions', function (){
  describe('#ensureObject', function (){
    var ensureObject = require('./../../lib/helpers/ensureObject.js');

    describe('##Requiring the module', function (){
      it('returns a function', function (){
        assert.equal(typeof ensureObject, 'function');
      });
    });
    describe('##Calling the function', function (){
      it('returns the same empty object when argument 1 is an empty object', function (){
        var empty_object = {};
        assert.equal(ensureObject(empty_object), empty_object);
      });
      it('returns the same object when argument 1 is an object', function (){
        var filled_object = { a: 'b', c: 'd' };
        assert.equal(ensureObject(filled_object), filled_object);
      });
      it('returns an empty object when argument 1 is an array', function (){
        var test = ensureObject([]);

        assert.notEqual(test instanceof Array, true);
        assert.equal(test instanceof Object, true);

        var keys = 0;
        for (var key in test) {
          if (test.hasOwnProperty(key)) {
            keys++;
          }
        }
        assert.equal(keys, 0);
      });
      it('returns an empty object when argument 1 is a string', function (){
        var test = ensureObject('string!');

        assert.notEqual(test instanceof String, true);
        assert.equal(test instanceof Object, true);

        var keys = 0;
        for (var key in test) {
          if (test.hasOwnProperty(key)) {
            keys++;
          }
        }
        assert.equal(keys, 0);
      });
      it('returns an empty object when argument 1 is a number', function (){
        var test = ensureObject(5);

        assert.notEqual(test instanceof Number, true);
        assert.equal(test instanceof Object, true);

        var keys = 0;
        for (var key in test) {
          if (test.hasOwnProperty(key)) {
            keys++;
          }
        }
        assert.equal(keys, 0);

      });

    });

  });
});