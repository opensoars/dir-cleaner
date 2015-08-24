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
 * @return {object} this - DirCleaner instance allows for chain calls
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
 * Returns the instance created when calling `new DirCleaner`. Passes the
 * config parameter just like `new DirCleaner(config)`.

 */
DirCleaner.getInstance = function (config) {
  return new this(config);
};

/**
 * @return {object} this - DirCleaner instance, allows chain calls
 */
// Should be able to pass just a cb function
DirCleaner.prototype.clean = function () {
  var args = arguments,
      config,
      cb;

  if (typeof args[0] === 'function') {
    cb = args[0];
  }
  else if (typeof args[0] === 'object' && typeof args[1] === 'function') {
    config = args[0];
    cb = args[1];
  }


  // Handle config
  // When .clean is done
  if (cb && typeof cb === 'function') {
    cb();
  }

  return this;
};


module.exports = DirCleaner;