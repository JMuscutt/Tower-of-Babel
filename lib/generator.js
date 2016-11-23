"use strict";

var max = process.argv[2];
var FizzBuzz = regeneratorRuntime.mark(function _callee() {
    var num;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    num = 1;

                case 1:
                    if (!(num <= max)) {
                        _context.next = 22;
                        break;
                    }

                    if (!(num % 3 === 0 && num % 5 === 0)) {
                        _context.next = 7;
                        break;
                    }

                    _context.next = 5;
                    return "FizzBuzz";

                case 5:
                    _context.next = 19;
                    break;

                case 7:
                    if (!(num % 3 === 0)) {
                        _context.next = 12;
                        break;
                    }

                    _context.next = 10;
                    return "Fizz";

                case 10:
                    _context.next = 19;
                    break;

                case 12:
                    if (!(num % 5 === 0)) {
                        _context.next = 17;
                        break;
                    }

                    _context.next = 15;
                    return "Buzz";

                case 15:
                    _context.next = 19;
                    break;

                case 17:
                    _context.next = 19;
                    return num;

                case 19:
                    num++;
                    _context.next = 1;
                    break;

                case 22:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
})();
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