# arikushi
Generate Japanese word mapping from Latin characters

[![Version](https://img.shields.io/npm/v/arikushi.svg)](https://www.npmjs.com/package/arikushi)
[![Codecov](https://img.shields.io/codecov/c/github/serkansokmen/arikushi.svg)](https://codecov.io/github/serkansokmen/arikushi)
[![Travis](https://img.shields.io/travis/serkansokmen/arikushi.svg?style=flat-square)](https://travis-ci.org/serkansokmen/arikushi)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


#### Installation
```
npm install --save arikushi
```

#### Usage
```javascript
// Require the library
var a = require('arikushi');

// Pass any number of strings to `convert`
var result = a.convert('Hello', 'World');
console.log(result);  // outputs: `rikutatamo meimoshitate`

// Pass any number of numbers to `random`
result = a.random(3);
console.log(result);
// possible outputs:
// `kinana`
// `zuruke`
// `fumota`

result = a.random(2, 5, 1);
console.log(result);
// possible outputs:
// `domo kinotokato ji`
// `rutu zimeizukimei mei`
// `furi zirinmedoki tu`

result = a.random(4, 2);
console.log(result);
// possible outputs:
// `ketomichi meiri`
// `kimerido lufu`
// `rurinnorin karin`


var mapping = a.getMapping();
console.log(mapping);   // outputs all available mappings
```
