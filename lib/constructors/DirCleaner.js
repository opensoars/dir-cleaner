var ensureObject = require('./../helpers/ensureObject.js');
/**
 * DirCleaner constructor function.
 *
 * @example
 * var dirCleaner = new DirCleaner({
 *   properties: { dir: '/temp' }
 * });
 * @constructor DirCleaner
 * @param {object} config - DirCleaner instance configuration
 * @param {object} config.properties - Dircleaner instance properties
 */
var DirCleaner = function DirCleaner(config) {
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

/**
 * 
 */
DirCleaner.getInstance = function (config) {
  return new this(config);
};

/**
 * @param {} config - 
 * @param {} cb - 
 * @return {object} this - DirCleaner instance, allows chain calls
 */
DirCleaner.prototype.clean = function (config, cb) {
  
  console.log('DirCleaner.prototype.clean');

  //console.log(__dirname);

  return this;
};


module.exports = DirCleaner;