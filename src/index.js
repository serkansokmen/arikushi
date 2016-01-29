var shuffle = require('knuth-shuffle').knuthShuffle;
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

    size = size || 1;

    var arr = [];
    var result = '';

    Object.keys(mapping).forEach(function(key) {
      var val = mapping[key];
      arr.push({
        key: key,
        value: val
      });
    });
    var shuffled = shuffle(arr);

    for (var i=0; i<size; i++) {
      result += shuffled[i].value;
    }
    return result.trim();
  }
};
