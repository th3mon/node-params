'use strict';

var
    express = require('express'),
    app = express(),
    args = process.argv.slice(2),
    argName = 'arg1',
    validArgumets = [
        'arg1',
        'arg2',
        'argN'
    ];
    
function processArguments (arg) {
    validArgumets.forEach(function processValidArguments (validArgument) {
        if ( contains(arg, validArgument + '=false') ) {
            console.log(validArgument + ' is off');
        }
        
        else if ( contains(arg, validArgument + '=true') || contains(arg, validArgument) ) {
            console.log(validArgument + ' is on');
        } 
    });
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
