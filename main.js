/*
Pseudocode
*/

// universal variables
let operand1;
let operator;
let operand2

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

// operation methods
const operate = function(operand1, operator, operand2) {
    switch (operator) {
        case '+':
            return add(operand1, operand2);
            break;
        case '-':
            return subtract(operand1, operand2);
            break;
        case '*':
            return multiply(operand1, operand2);
            break;
        case '/':
            return divide(operand1, operand2);
            break;
        default:
            throw new Error('Unrecognized operator, please try again!');
    }
}

// populate display
const popDisplay = function() {
    let result = document.querySelector('.result');
    let btns = document.querySelectorAll('button');
    btns.forEach((curr) => curr.addEventListener('click', () => {
        result.textContent += curr.textContent;
    }))
}

// tests
// basic arithmetic
console.log(add(6, 3));
console.log(subtract(6, 3));
console.log(multiply(6, 3));
console.log(divide(6, 3));

// operation
console.log(operate(6, '+', 3));
console.log(operate(6, '-', 3));
console.log(operate(6, '*', 3));
console.log(operate(6, '/', 3));
popDisplay();