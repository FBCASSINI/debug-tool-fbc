const fs = require('fs');
const debugs = require('./debug');

// Creating log messages
function logs(message) {
  debugs.debug(message);
  console.log(message);
  fs.writeFileSync('./logs/log.log');
}

// exporting logs
module.exports = logs;
