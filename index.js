var dir_cleaner = require('./lib/dir-cleaner.js');

module.exports = dir_cleaner;

var DirCleaner = dir_cleaner({
  proto_prop: true
});

var dirCleaner = new DirCleaner({
  properties: {
    instance_prop: true
  }
});
