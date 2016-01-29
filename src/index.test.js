var expect = require('chai').expect;
var arikushi = require('./index');

describe('arikushi', function() {
  describe('convert', function() {

    it('should expect a parameter', function() {
      var str = null;
      var converted = arikushi.convert(str);
      expect(converted).to.have.length(0);
    });

    it('should return a string result', function() {
      var str = 'Lorem ipsum';
      var converted = arikushi.convert(str);
      expect(converted).to.be.a('string');
    });

    it('should return an empty string if parameter is type of number', function() {
      var str = 1234;
      var converted = arikushi.convert(str);
      expect(converted).to.have.length(0);
    });

    it('should return empty string if parameter is type of object', function() {
      var str = {};
      var converted = arikushi.convert(str);
      expect(converted).to.have.length(0);
    });

    it('should return empty string if parameter is type of array', function() {
      var str = [];
      var converted = arikushi.convert(str);
      expect(converted).to.have.length(0);
    });

    it('should return a string from `mapping`', function() {
      var str = 'Hello';
      var mapping = arikushi.mapping;
      for (var i=0; i<str.length; i++) {
        expect(mapping).to.have.ownProperty(str.charAt(i).toUpperCase());
      }
    });
  });

  describe('random', function() {
    it('should return a random result', function() {
      var result0 = arikushi.random(3);
      expect(result0).to.be.a('string');

      var result1 = arikushi.random(3);
      expect(result1).to.be.a('string');

      expect(result0).to.not.equal(result1);
    });
  });
});
