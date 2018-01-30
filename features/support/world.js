const { setWorldConstructor } = require('cucumber');
const path = require('path');
const cwd = process.cwd();

const rootDir = (filePath = '') => require(path.join(cwd, 'lib', filePath));
const Maths = rootDir('/maths');

function CustomWorld() {
  this.math = Maths;
}

setWorldConstructor(CustomWorld);
