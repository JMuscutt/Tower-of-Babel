var [arg1, arg2] = process.argv.slice(2);
import {PI} from './Math';
import {sqrt} from './Math';
import {square} from './Math';
console.log(PI);
console.log(sqrt(arg1));
console.log(square(arg2));
