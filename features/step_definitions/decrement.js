const { Given, Then, When } = require('cucumber');
const { expect } = require('chai');

Given('a second variable set to {int}', function(number, callback) {
  this.number1 = number;
  callback();
});

When('I decrement this variable by {int}', function(number, callback) {
  this.result = this.math.decrement(this.number1, number);
  callback();
});

Then('the result should equal {int}', function(number, callback) {
  expect(this.result).to.eql(number);
  callback();
});
