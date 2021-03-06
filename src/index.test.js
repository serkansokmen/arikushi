var chai = require('chai');
var expect = chai.expect;
var chaiString = require('chai-string');
var a = require('./index');

chai.use(chaiString);

describe('arikushi', function() {
  describe('convert', function() {

    it('should return a string result', function() {
      expect(a.convert('Lorem', 'ipsum')).to.be.a('string');
    });

    it('should return an empty string if parameter is numeric', function() {
      expect(a.convert(1234)).to.have.length(0);
      expect(a.convert('1234')).to.have.length(0);
    });

    it('should return an empty string if no param given', function() {
      expect(a.convert()).to.have.length(0);
    });

    it('should work with chars not in mapping', function() {
      expect(a.convert('ÜĞİŞÇÖüğışçö')).to.have.length(0);
    });

    it('should not have `undefined` in result', function() {
      expect(a.convert('lorem', 'ipsum')).to.have.indexOf('undefined', -1);
    });
  });

  describe('random', function() {
    it('should return a random result', function() {
      var r0 = a.random(3);
      expect(r0).to.be.a('string');
      var r1 = a.random(3);
      expect(r1).to.be.a('string');
      expect(r0).to.not.equal(r1);
    });

    it('should work with multiple parameters', function() {
      var r0 = a.random(3, 4, 5);
      expect(r0).to.be.a('string');
      var r1 = a.random(3, 4, 5);
      expect(r1).to.be.a('string');
      expect(r0).to.not.equal(r1);
    });
  });

  describe('getMapping', function() {
    it('should return the list of available mappings', function() {
      expect(a.getMapping()).to.be.an('object');
    })
  })
});
