


var ensureObject = require('./helpers/ensureObject.js');
/**
 * 1. helpers
 * 2. variables
 * 3. defaults and typechecking
 * 4. DirCleaner constructor
 * 5. DirCleaner constructor prototype property binding
 */

/**
 * When called returns DirCleaner constructor function.
 *
 * @example
 * var dir_cleaner = require('dir_cleaner'),
 *     DirCleaner = dir_cleaner({ dir: '/temp' });
 *
 * @module lib/dir-cleaner
 * @param {object} proto_properties - DirCleaner.prototype properties
 */
var moduleInitializer = function moduleInitializer(proto_properties) {
  var DirCleaner = require('./constructors/DirCleaner.js');

  var proto_property; 

  proto_properties = ensureObject(proto_properties);

  // Set DirCleaner prototype data
  for (proto_property in proto_properties) {
    if (proto_properties.hasOwnProperty(proto_property)) {
      DirCleaner.prototype[proto_property] = proto_properties[proto_property];
    }
  }

  return DirCleaner;
};

/**
 * Allows simple usage without wizardry. This function only sets
 * instance properties. The most simple way is by just passing a string
 * as the first argument, this gets seen as {dir: first_argument}.
 *
 * @example
 * var cleanTemp = require('dir-cleaner').basic({ dir: '/temp' });
 * // or
 * var cleanTemp = require('dir-cleaner').basic('/temp');
 *
 * @param {object|string} basic_config - DirCleaner instance config or
 *                                       a directory string
 */
moduleInitializer.basic = function (basic_config) {
  var DirCleaner = require('./constructors/DirCleaner.js');

  if (typeof basic_config === 'string') {
    basic_config = { dir: basic_config };
  }

  basic_config = ensureObject(basic_config);

  return new DirCleaner(basic_config);
};


module.exports = moduleInitializer;