# arikushi
Generate Japanese word mapping from Latin characters

[![Version](https://img.shields.io/npm/v/arikushi.svg)](https://www.npmjs.com/package/arikushi)
[![Codecov](https://img.shields.io/codecov/c/github/serkansokmen/arikushi.svg)](https://codecov.io/github/serkansokmen/arikushi)
[![Travis](https://img.shields.io/travis/serkansokmen/arikushi.svg?style=flat-square)](https://travis-ci.org/serkansokmen/arikushi)
[![GitHub license](https://img.shields.io/github/license/serkansokmen/arikushi.svg?style=flat-square)]()


#### Installation
```
npm install --save arikushi
```

#### Usage
```javascript
// Require the library
var arikushi = require('arikushi');

// Pass any number of string arguments
arikushi.convert('Hello', 'World');

// Pass any number of number arguments
arikushi.random(3);
arikushi.random(2, 5, 1);
arikushi.random(4, 2);

// Get a list of available mappings
arikushi.getMapping();
```
