var assert = require('assert');

describe('Main module', function (){
  describe('#requiring the module', function (){
    var dir_cleaner = require('./../../index.js');
    it('returns a function', function (){
      assert.equal(typeof dir_cleaner, 'function');
    });
  });
  describe('#calling the returned function', function (){
    var dir_cleaner = require('./../../index.js');
    it('returns the DirCleaner constructor function', function (){
      assert.equal(typeof dir_cleaner(), 'function');
    });
  });
  describe('#initializing an instance', function (){
    var dir_cleaner = require('./../../index.js');
    it('returns the dirCleaner instance function', function (){
      //assert.equal(typeof new (dir_cleaner()), 'function');
    });
  });
});