'use strict';

var babel = require('babel-core');

// TODO(douglasduteil): deal with the options
module.exports = function istanbulBabelInstrumenterTranspiler(code){
  return babel.transform(code, {sourceMaps: true});
}

/*
var extend = require('util')._extend;
var babel = require('babel');
var defaultOptions = {sourceMaps: true};
var userOptions = {stage: 0};
var options = util._extend(defaultOptions, userOptions);
var result = babel.transform(code, options);
code = result.code;
 */
