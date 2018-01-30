module.exports.increment = (a = 0, b = 0) => a + b;

module.exports.decrement = (a = 0, b = 0) => a - b;

module.exports.multiply = (a = 0, b = 0) => a * b;

module.exports.power = (a, n) => a ** n;

module.exports.divide = (a = 0, b = 1) => {
  if (b === 0) {
    throw new Error('Cannot divide by zero!');
  }
  return a / b;
};
