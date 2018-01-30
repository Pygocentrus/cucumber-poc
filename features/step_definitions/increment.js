const { Before, Given, Then, When } = require('cucumber');
const { expect } = require('chai');

Before(function(opts) {
  // console.info('before', opts)
});

Given('a variable set to {int}', function(number, callback) {
  this.number1 = number;
  callback();
});

When('I increment the variable by {int}', function(number, callback) {
  this.result = this.math.increment(this.number1, number);
  callback();
});

Then('the variable should contain {int}', function(number, callback) {
  expect(this.result).to.eql(number);
  callback();
});
