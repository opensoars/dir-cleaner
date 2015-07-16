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
module.exports = function (proto_properties) {

  var ensureObject = require('./helpers/ensureObject.js');

  var DirCleaner, 
      proto_property; 

  proto_properties = ensureObject(proto_properties);

  /**
   * DirCleaner constructor function. All DirCleaner methods and properties are
   * prefixed and suffixed with underscores, like so _cleanDir_ .
   *
   * @example
   * var dirCleaner = new DirCleaner({
   *   properties: { dir: '/temp' }
   * });
   *
   * @constructor DirCleaner
   * @param {object} config - DirCleaner instance configuration
   * @param {object} config.properties - Dircleaner instance properties
   */
  DirCleaner = function DirCleaner(config) {
    var instance_property;

    config = ensureObject(config);
    config.properties = ensureObject(config.properties);

    // Set DirCleaner instance data
    for (instance_property in config.properties) {
      if (config.properties.hasOwnProperty(instance_property)) {
        this[instance_property] = config.properties[instance_property];
      }
    }

    return this;
  };

  // Set DirCleaner prototype data
  for (proto_property in proto_properties) {
    if (proto_properties.hasOwnProperty(proto_property)) {
      DirCleaner.prototype[proto_property] = proto_properties[proto_property];
    }
  }

  return DirCleaner;
};