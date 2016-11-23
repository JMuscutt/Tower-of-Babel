var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

var avg = function(...val) {
        return val.reduce((total, val) => total + +val, 0) / val.length;
};
// write a function called `avg` here that calculates the average.

console.log(avg(...args));
