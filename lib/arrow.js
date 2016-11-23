"use strict";

var inputs = process.argv.slice(2);
var result = inputs.map(function (x) {
                   return x[0].toUpperCase();
}).reduce(function (accumulator, current) {
                   return accumulator + current;
});
console.log(result);