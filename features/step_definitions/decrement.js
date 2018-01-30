const { defineSupportCode } = require('cucumber');
const { expect } = require('chai');

defineSupportCode(({ Given, Then, When }) => {
  Given('a variable set to {int}', function(number, callback) {
    this.firstPredicate = number ? parseInt(number) : null;
    callback();
  });

  When('I decrement this variable by {int}', function(number, callback) {
    const secondPredicate = number ? parseInt(number) : null;
    this.result = this.math.decrement(this.firstPredicate, secondPredicate);
    callback();
  });

  Then('the result should be {int}', function(number, callback) {
    expect(this.result).to.eql(number);
    callback();
  });
});
