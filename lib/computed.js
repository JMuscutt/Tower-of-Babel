"use strict";

var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
var sum = +process.argv[3] + evenOrOdd;
var obj = (_obj = {}, _defineProperty(_obj, evenOrOddKey, evenOrOdd), _defineProperty(_obj, sum, sum), _obj);

/*var obj = {
    [process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
    [process.argv[3] + +process.argv[3]]: +process.argv[2] + +process.argv[3],
});*/