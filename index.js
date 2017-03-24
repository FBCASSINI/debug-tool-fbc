const chalk = require('chalk');
const fs = require('fs');

// debuging colors
const success = chalk.green;
const error = chalk.red;
const warn = chalk.yellow;

fs.writeFileSync('./logs/log.log');

exports.debug = (msg, type) => {
  if (process.env.DEBUG === 'true') {
    if (type === 'warn') {
      // Warnings
      console.warn(warn('Warning: ' + msg));
      fs.appendFile('src/logs/log.log', '\n Warning:' + msg);
    } else if (type === 'error') {
      // Errors
      console.error(error('Error: ' + msg));
      fs.appendFile('src/logs/log.log', '\n Error:' + msg);
    } else {
      // Success
      console.log(success('Success: ' + msg));
      fs.appendFile('src/logs/log.log', '\n Success:' + msg);
    }
  }
};

exports.verNumberInc = (currentVersionNumber, change) => {
  const versionArray = currentVersionNumber.split('.');

  for(let versionIndex in versionArray) {
    versionArray[versionIndex] = parseInt(versionArray[versionIndex]);
  }

  if(change === 'major') {
      versionArray[0] += 1;
      versionArray[1] = 0;
      versionArray[2] = 0;
    } else if(change === 'minor') {
      versionArray[1] += 1;
      versionArray[2] = 0;
    } else if(change === 'patch') {
      versionArray[2] += 1;
    }

    return versionArray.join('.');
}