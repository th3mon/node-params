# simple-args
A simple to use parser for arguments given when starting app by node.

# Install

```bash
npm install https://github.com/th3mon/simple-args.git
```

```bash
mkdir node_modules
mkdir node_modules/simple-args
cp index.js node_modules/simple-args/index.js
cp package.json node_modules/simple-args/package.json
```

# Test
```bash
node example.js arg1 no-arg2
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
