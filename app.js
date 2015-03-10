'use strict';

var
    express = require('express'),
    app = express(),
    args = process.argv.slice(2),
    argName = 'arg1';
    
args.forEach(function(arg) {
    if (arg.indexOf(argName + '=false') !== -1) {
        console.log(argName + ' is off');
    }
    
    else if ( (arg.indexOf(argName + '=true') !== -1) || (arg.indexOf(argName) !== -1) ) {
        console.log(argName + ' is on');
    }
});
