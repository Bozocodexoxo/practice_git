import * as calc from './mathUtils.js';
import {addition} from './mathUtils.js';

console.log('Addition of given numbers using named export is',addition(6,9));


console.log('Addition of two numbers is:',calc.add(1,2));
console.log('Subtraction of two numbers is:',calc.subtract(4,6));
console.log('Multiplication of two numbers is:',calc.multiply(3,7));
console.log('Division of two numbers is:',calc.divide(4,5));


