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
  },

  random: function(size) {
    var keys = [];
    var vals = [];
    var result = '';
    size = size || 1;
    Object.keys(mapping).forEach(function(key) {
      var val = mapping[key];
      keys.push(key);
      vals.push(val);
    });
    for (var i=0; i<size; i++) {
      result += vals[i];
    }
    return result;
  }
};
