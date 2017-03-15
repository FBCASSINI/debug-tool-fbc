## Debug Tool Review
This is a node.js debug tool to debug your application.

## Installation
to get this app running please run this
```
npm install dubug-tool

```
Then run

```
npm Install

```

to add the dependencies from the package.json file.

## Debug Procedures
You will need to add npm package within the code, So make sure this snippet of code is in the source of every file.

```
const debugtool require('debug-tool')

```

to enable logging run this code from the command line before calling the server

```

debug=true     //example debug=true  nodemon src/server.js//


```

## Unit testing

```
debug=true mocha

```
