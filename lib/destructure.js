"use strict";

var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};

var familyName = json.name.family,
    birthDay = json.birth.day;
// Your code here.

console.log(familyName);
console.log(birthDay);