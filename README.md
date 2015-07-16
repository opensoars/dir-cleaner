# dir-cleaner

[![Code Climate](https://codeclimate.com/github/opensoars/dir-cleaner/badges/gpa.svg)](https://codeclimate.com/github/opensoars/dir-cleaner)
[![Inline docs](https://inch-ci.org/github/opensoars/dir-cleaner.svg?branch=master)](http://inch-ci.org/github/opensoars/dir-cleaner)
[![Build Status](https://travis-ci.org/opensoars/dir-cleaner.svg?branch=master)](https://travis-ci.org/opensoars/dir-cleaner)
[![Coverage Status](https://coveralls.io/repos/opensoars/dir-cleaner/badge.svg?branch=master&service=github)](https://coveralls.io/github/opensoars/dir-cleaner?branch=master)

[![Dependency Status](https://david-dm.org/opensoars/dir-cleaner.svg?style=flat)](https://david-dm.org/opensoars/dir-cleaner)
[![Development Dependency Status](https://david-dm.org/opensoars/dir-cleaner/dev-status.svg?style=flat)](https://david-dm.org/opensoars/dir-cleaner#info=devDependencies&view=table)

Configurable directory cleaner

---


## Install

`npm install dir-cleaner`

## Use

Basic usage:
```js
var tempCleaner = new ( require('dir-cleaner')({ dir: '/temp' }) );
```

Custom usage:
```js

var dir_cleaner = require('dir-cleaner');

/**
 * When you invocate the required dir-cleaner function, it will return a
 * constructor. The object you pass as the 1st argument its properties
 * will get bound to the 
 */
var DirCleaner = dir_cleaner({

});

/**
 * Create new instance.
 */
var dirCleaner = new DirCleaner({
    exclude: ['*.js', '.gitignore'],
    logger: function() {
        console.log('[dirCleaner]')
    },
    /** Used to set properties to the instance */
    properties: {

    }
});
```

## Tests and code coverage

`npm run local_test`, coverage information can be viewed in the browser at `./coverage/lcov-report/index.html`.

## Documentation
`npm run doc`, documentation can be viewed in the browser at `./doc/jsdoc/index.html`