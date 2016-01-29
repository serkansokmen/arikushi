# arikushi

Generate Japanese word mapping from Latin strings

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
