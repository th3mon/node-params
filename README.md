# simple-args
A simple to use parser for arguments given when starting app by node.

# Install

## Make directory if you don't have it

```bash
mkdir node_modules
```

Then clone repo
```bash
cd node_modules
git clone https://github.com/th3mon/simple-args.git
```

# Test
```bash
node node_modules/simple-args/examples/examlpe.js arg1 no-arg2
```

# Example

```js
'use strict';

var
    parse = require('simple-args'),
    statements = {};

statements = parse(['arg1', 'arg2', 'argN']);

console.log(statements);
```

```bash
node app.js one no-two
```
