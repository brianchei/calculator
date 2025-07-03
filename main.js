/*
Pseudocode
*/

// arithmetic methods
const add = function(addend, addend2) {
	let sum = addend + addend2;
    return sum;
};

const subtract = function(minuend, subtrahend) {
	let difference = minuend - subtrahend;
    return difference;
};

const multiply = function(multiplicand, multiplier) {
    let product = multiplicand * multiplier;
    return product;
};

const divide = function(dividend, divisor) {
    let quotient = dividend / divisor;
    return quotient;
};

// tests
console.log(add(6, 3));
console.log(subtract(6, 3));
console.log(multiply(6, 3));
console.log(divide(6, 3));
