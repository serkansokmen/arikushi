var mapping = require('./mapping.json').mapping;

module.exports = {
  mapping: mapping,
  convert: function(str) {

    if (str === null || (str != null && typeof str !== 'string')) {
      return '';
    }
    var result = '';
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i).toUpperCase();
      if (mapping.hasOwnProperty(char)) {
        result += mapping[char];
      }
    }
    return result;
  }
};
