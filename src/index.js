var shuffle = require('knuth-shuffle').knuthShuffle;
var mapping = require('./mapping.json').mapping;

function Converter() {
  this.mapping = mapping;
}

Converter.prototype.convert = function() {
  var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  var str = '';
  var result = '';

  args.forEach(function(arg) {
    if ((/^[a-zA-Z ]*$/).test(arg)) {
      str += arg + ' ';
    }
  });

  for (var i = 0, char = ''; i < str.length; i++) {
    char = str.charAt(i).toLowerCase();
    result += mapping[char];
  }
  return result.trim();
};

Converter.prototype.random = function() {
  var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  var result = '';
  var possibles = '';

  var arr = [];
  Object.keys(mapping).forEach(function(key) {
    possibles += key;
  });

  args.forEach(function(arg) {
    arg = arg*1;
    for (var i=0; i<arg; i++) {
      var key = possibles.charAt(Math.floor(Math.random()*possibles.length));
      result += mapping[key];
    }
    result += ' ';
  });

  return result.trim();
};


module.exports = new Converter();
