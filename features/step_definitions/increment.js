const { defineSupportCode } = require('cucumber');
const { expect } = require('chai');

defineSupportCode(({ Given, Then, When }) => {
  Given('a variable set to {int}', function(number, callback) {
    this.firstPredicate = number ? parseInt(number) : null;
    callback();
  });

  When('I increment the variable by {int}', function(number, callback) {
    const secondPredicate = number ? parseInt(number) : null;
    this.result = this.math.increment(this.firstPredicate, secondPredicate);
    callback();
  });

  Then('the variable should contain {int}', function(number, callback) {
    expect(this.result).to.eql(number);
    callback();
  });
});
