/**
 * helpers
 * variables
 * defaults
 * DirCleaner
 * property binding
 */


/**
 * Returns DirCleaner constructor.
 *
 * @param {object} proto_properties - DirCleaner.prototype properties
 */
module.exports = function (proto_properties) {

  /**
   * Ensures the return of an object.
   * If another data type is passed return an empty object.
   *
   * @param obj - Argument that gets data type checked
   * @private
   */
  function ensureObject(obj) {

    return typeof obj !== 'object' || obj instanceof Array ? {} : obj;
  }


  var DirCleaner, 
      proto_property; 

  proto_properties = ensureObject(proto_properties);

  /**
   * DirCleaner constructor function. All DirCleaner methods and properties are
   * prefixed and suffixed with underscores, like so _cleanDir_ .
   *
   * @param {object} config - DirCleaner instance configuration
   * @param {object} config.properties - Dircleaner instance properties
   */
  DirCleaner = function DirCleaner(config) {
    var instance_property;

    config = ensureObject(config);
    config.properties = ensureObject(config.properties);

    for (instance_property in config.properties) {
      if (config.properties.hasOwnProperty(instance_property)) {
        this[instance_property] = config.properties[instance_property];
      }
    }

    return this;
  };

  for (proto_property in proto_properties) {
    if (proto_properties.hasOwnProperty(proto_property)) {
      DirCleaner.prototype[proto_property] = proto_properties[proto_property];
    }
  }

  return DirCleaner;
}