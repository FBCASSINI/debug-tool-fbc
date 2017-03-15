const chalk = require('chalk');
const fs = require('fs');

// debuging colors
const success = chalk.green;
const error = chalk.red;
const warn = chalk.yellow;

describe('debug', () => {
  it('testing Success', () => {
    console.log(success('Success Test: Passed!'));
  });
  it('Testing Warning', () => {
    console.warn(warn('Warn Test: Passed!'));
  });
  it('Testing Error', () => {
    console.error(error('Error Test: Passed!'));
  });
});

fs.appendFile('./logs/log.log', () => {
  console.log('Data was appended to file!');
});
