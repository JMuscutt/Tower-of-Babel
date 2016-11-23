'use strict';
// This variable `a` should be accessible outside of the block scope.

var a = 5;

// This variable `b` should not be reassignable.
var b = process.argv[2];

if (a === 5) {
  // This variable `c` should only be valid in this block.
  var _c = 4;
  console.log(_c); // 4

  // This variable `b` should only be valid in this block and should not be reassignable.
  var _b = 8;
  console.log(_b); // 8
}

console.log(a); // 5
console.log(b);
try {
  // Trying to change the value of `c`
  c = 1000;
} catch (e) {
  // but an `c is not defined` error should occur.
  console.log(e);
};