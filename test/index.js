var
    should = require('chai').should(),
    parse = require('../index');

describe('#parse', function(){
    it('given arg should be trufy', function() {
        parse(['arg'], true, ['arg']).should.be.ok;
    });
    
    it('given no-arg should be falsy', function() {
      parse(['arg'], true, ['no-arg']).should.be.not.ok; 
    });
});