import chai from 'chai';
import sparrow from '../lib/sparrow.js';

chai.expect();

const expect = chai.expect;

var lib;

describe('Given an instance of my sparrow', function () {
  before(function () {
    lib = new sparrow();
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('sparrow');
    });
  });
});
