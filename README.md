[![NPM](https://nodei.co/npm/mkdf.png?downloads=true)](https://nodei.co/npm/mkdf/)

This package uses or may use at some point in the future ECMAScript 6 features. Use it on a compatible environment or transpile it with Traceur, Closure Compiler, es6-transpiler or equivalent. Please note that some of these have flaws and bugs, test your code carefully until you find a suitable tool for your task.

When cloning this repository, put the folder inside another named "node_modules" in order to avoid potential errors related to npm's dependency handling, and then run `npm install` on it.

No piece of software is ever completed, feel free to contribute and be humble.

# mkdf

## Sample usage:

```javascript
var mkdf = require('mkdf'),
    keys,
    key;

function PRF(a,b){
  // ...
}

keys = mkdf(PRF,'password',['salt0','salt1','salt2']);
key = String.fromCharCode.apply(this,keys);
```

