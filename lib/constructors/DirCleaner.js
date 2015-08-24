var fs = require('fs');

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
  config = ensureObject(config);

  for (var key in config) {
    if (config.hasOwnProperty(key)) {
      this[key] = config[key];
    }
  }

  return this;
};

/**
 * Returns the instance created when calling `new DirCleaner`. Passes the
 * config parameter just like `new DirCleaner(config)`.
 *
 * @param {object} config - Config to pass to DirCleaner constructor function
 * @return {object} - DirCleaner instance
 */
DirCleaner.getInstance = function (config) {
  return new this(config);
};

/**
 * 
 */
DirCleaner.prototype.cleanSync = function () {

};

/**
 * 
 */
DirCleaner.prototype.cleanAsync = function () {

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
    this.cb = args[0];
  }
  else if (typeof args[0] === 'object' && typeof args[1] === 'function') {
    config = args[0];
    this.cb = args[1];
  }

  var base_dir = this.dir,
      files = [],
      dirs = [];

  // Handle config
  // When .clean is done
  if (cb && typeof cb === 'function') {
    cb();
  }

  return this;
};


module.exports = DirCleaner;


/*
  function readdirHandler (err, files) {
    if (err) console.log(err);

    files.forEach(function (file) {

      var cd = base_dir + '/' + file;

      fs.stat(cd, function (err, stats) {
        if (err) console.log(err);

        if (stats.isDirectory()) {
          dirs.push(cd);
        }
        else if (stats.isFile()) {
          files.push(cd);
        }
      });

    });
  }


  fs.readdir(base_dir, readdirHandler);
*/