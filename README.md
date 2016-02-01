# arikushi
Generate Japanese word mapping from Latin characters

[![Version](https://img.shields.io/npm/v/arikushi.svg)](https://www.npmjs.com/package/arikushi)
[![Codecov](https://img.shields.io/codecov/c/github/serkansokmen/arikushi.svg)](https://codecov.io/github/serkansokmen/arikushi)
[![Travis](https://img.shields.io/travis/serkansokmen/arikushi.svg?style=flat-square)](https://travis-ci.org/serkansokmen/arikushi)
![GitHub license](https://img.shields.io/github/license/serkansokmen/arikushi.svg?style=flat-square)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


#### Installation
```
npm install --save arikushi
```

#### Usage
```javascript
// Require the library
var a = require('arikushi');

// Pass any number of string arguments
var result = a.convert('Hello', 'World');
console.log(result);

// Pass any number of number arguments
result = a.random(3);
console.log(result);

result = a.random(2, 5, 1);
console.log(result);

result = a.random(4, 2);
console.log(result);

// Get a list of available mappings
var mapping = arikushi.getMapping();
console.log(mapping);
```
