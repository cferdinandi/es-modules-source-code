// Import all functions as an object and assign them to the _ variable
import * as _ from './helpers.js';

// Get two numbers from the user
let num1 = parseFloat(prompt('Enter a number', 0));
let num2 = parseFloat(prompt('Enter another number', 0));

// Get the total
let total = _.add(num1, num2);

// Tell them the total
alert('The total is ' + total);