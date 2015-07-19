'use strict';

var babel = require('babel-core');

// TODO(douglasduteil): deal with the options
module.exports = function istanbulBabelInstrumenterTranspiler(code){
  return babel.transform(code, {sourceMaps: true});
}
