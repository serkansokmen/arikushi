# arikushi

Generate Japanese word mapping from Latin characters

[![Version](https://img.shields.io/npm/v/arikushi.svg)](https://www.npmjs.com/package/arikushi)
[![Codecov](https://img.shields.io/codecov/c/github/serkansokmen/arikushi.svg)](https://codecov.io/github/serkansokmen/arikushi)
[![Travis](https://img.shields.io/travis/serkansokmen/arikushi.svg?style=flat-square)](https://travis-ci.org/serkansokmen/arikushi)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

#### Installation

```bash
npm install --save arikushi
```

#### Usage

```typescript
// Import the library
import arikushi from "arikushi";

// Pass any number of strings to `convert`
let result = arikushi.convert("Hello", "World");
console.log(result); // outputs: `rikutatamo meimoshitate`

// Pass any number of numbers to `random`
result = arikushi.random(3);
console.log(result);
// possible outputs:
// `kinana`
// `zuruke`
// `fumota`

result = arikushi.random(2, 5, 1);
console.log(result);
// possible outputs:
// `domo kinotokato ji`
// `rutu zimeizukimei mei`
// `furi zirinmedoki tu`

result = arikushi.random(4, 2);
console.log(result);
// possible outputs:
// `ketomichi meiri`
// `kimerido luf
```
