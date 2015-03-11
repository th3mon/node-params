'use strict';

var
    parse = require('../../simple-args'),
    statements = {};

statements = parse(['arg1', 'arg2', 'argN']);

console.log(statements);
