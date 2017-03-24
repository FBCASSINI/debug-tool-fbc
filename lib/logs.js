const fs = require('fs');
const debugs = require('./debug');

const chalk = require('chalk');

// debuging colors
const success = chalk.green;
const error = chalk.red;
const warn = chalk.yellow;

// Creating log messages
function logs(message) {
  debugs.debug(message);
  console.log(message);
  fs.writeFileSync('./logs/log.log');
}

// exporting logs
module.exports = logs;
