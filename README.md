# arikushi
Generate Japanese word mapping from Latin strings

[![Version](https://img.shields.io/npm/v/arikushi.svg)](https://www.npmjs.com/package/arikushi)
[![Travis](https://img.shields.io/travis/serkansokmen/arikushi.svg?style=flat-square)](https://travis-ci.org/serkansokmen/arikushi)
[![GitHub license](https://img.shields.io/github/license/serkansokmen/arikushi.svg?style=flat-square)]()



#### Installation

```
npm install arikushi
```

#### Usage

```javascript
var arikushi = require('arikushi');
var str = 'Hello World';
var converted = arikushi.convert(str);
console.log(converted);
```

Or use `random(size)` to generate random word of `size` syllables:

```javascript
var random = arikushi.random(3);
```
