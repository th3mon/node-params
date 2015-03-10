'use strict';

var
    express = require('express'),
    app = express(),
    args = process.argv.slice(2),
    argName = 'arg1';
    
function processArguments (arg) {
    if ( contains(arg, argName + '=false') ) {
        console.log(argName + ' is off');
    }
    
    else if ( contains(arg, argName + '=true') || contains(arg, argName) ) {
        console.log(argName + ' is on');
    }
}

function contains(str1, str2) {
    if (!str1 || (typeof str1 !== 'string') || !str2 || (typeof str2 !== 'string') ) {
        return null;
    }
    
    else {
        return str1.indexOf(str2) !== -1;
    }
}

args.forEach(processArguments);
