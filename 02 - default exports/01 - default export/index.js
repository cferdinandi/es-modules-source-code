// Instead of using object destructuring...
// import {getTheAnswer} from './helpers.js';

// We can import the default directly
import getTheAnswer from './helpers.js';

// Get the answer
let answer = getTheAnswer();

// Tell them the total
alert(`The answer is ${answer}`);