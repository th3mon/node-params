'use strict';

var
    express = require('express'),
    app = express();
    
process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});
    