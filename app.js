'use strict';

function cli (validArgumets) {
    var args = process.argv.slice(2);
        
    args.forEach(processArguments);

    function processArguments (arg) {
        validArgumets.forEach(function processValidArguments (validArgument) {
            if ( arg === validArgument ) {
                console.log(validArgument + ' is on');
            } 
            
            else if ( arg === 'no-' + validArgument ) {
                console.log(validArgument + ' is off');
            } 
        });
    }
}

cli(['arg1', 'arg2', 'argN']);
