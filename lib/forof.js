"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var max = process.argv[2];
var FizzBuzz = _defineProperty({}, Symbol.iterator, function () {
    var count = 1;
    return {
        next: function next() {
            var num = count;
            if (num > max) {
                return { done: true, value: num };
            } else if (num % 3 === 0 && num % 5 === 0) {
                num = "FizzBuzz";
            } else if (num % 3 === 0) {
                num = "Fizz";
            } else if (num % 5 === 0) {
                num = "Buzz";
            }
            count++;
            return { done: false, value: num };
        }
    };
});
// here belongs the FizzBuzz logic
// Hint：
// When it's finished you have to return an object
// with the property `done: true` but before you
// have to set `done: false`

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = FizzBuzz[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

        console.log(n);
        // 1
        // 2
        // Fizz
        // 4
        // Buzz
        // Fizz
        // 7
        // 8
        // Fizz
        // Buzz
        // 11
        // Fizz
        // 13
        // 14
        // FizzBuzz
        // 16
        // 17
        // Fizz
        // 19
        // Buzz
        // Fizz
        // 22
        // 23
        // Fizz
        // Buzz
        // 26
        // Fizz
        // 28
        // 29
        // FizzBuzz
        // ...
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}