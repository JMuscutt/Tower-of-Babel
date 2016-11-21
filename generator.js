const max = process.argv[2];
    let FizzBuzz = function*(){
          let num = 1;
              while(num <= max) {
                  if(num % 3 === 0 && num % 5 === 0) {
                     yield "FizzBuzz";
                  }
                  else if(num % 3 === 0) {
                     yield "Fizz";
                  }
                  else if(num % 5 === 0) {
                      yield "Buzz";
                  }
                 else {
                     yield num;
                 }
                 num++;
                }
              }
          ();
        // here belongs the FizzBuzz logic
        // Hint：
        // When it's finished you have to return an object
        // with the property `done: true` but before you
        // have to set `done: false`

    for (var n of FizzBuzz) {
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
