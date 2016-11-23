'use strict';

var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(function (val) {
  var commaSep = val.split(',');
  commaSep.forEach(function (val) {
    if (val !== '') args.push(+val);
  });
});

var avg = function avg() {
  for (var _len = arguments.length, val = Array(_len), _key = 0; _key < _len; _key++) {
    val[_key] = arguments[_key];
  }

  return val.reduce(function (total, val) {
    return total + +val;
  }, 0) / val.length;
};
// write a function called `avg` here that calculates the average.

console.log(avg.apply(undefined, args));