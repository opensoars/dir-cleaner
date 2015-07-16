# dir-cleaner

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
 * constructor 
 * required module. The object you pass as the 1st argument its properties
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

