var dir_cleaner = require('./lib/dir-cleaner.js');

module.exports = dir_cleaner;

//var cleanDirBasic = dir_cleaner.basic('/temp');

//var t = new (dir_cleaner.getConstructor());


var DirCleaner = dir_cleaner.getConstructor({
  dir: __dirname + '/temp',
  async: true,
  recurse: true
});

/*
var dirCleaner = DirCleaner.getInstance({

});
*/

var dirCleaner = DirCleaner.getInstance({
  async: false
});

dirCleaner.clean();


console.log(dirCleaner.async);

//cleanDirBasic();

//require('./lib/dir-cleaner.js').basic('/temp').clean();

//require('./lib/dir-cleaner.js')('/temp');

/*
var TempCleaner = dir_cleaner();

var tempCleaner = new TempCleaner({
  properties: {
    instance_prop: true
  }
});

tempCleaner.clean();



var cleanTemp = (
  new (
    require('./lib/dir-cleaner.js')({ base_dir: '/doc' })
  )({ a: 'b' })
).clean;

cleanTemp();


var cleanTemp = require('./lib/dir-cleaner').basic({dir: __dirname + '/temp'});
*/