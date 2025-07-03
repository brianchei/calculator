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
const operate = function(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
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
        result.value += curr.textContent;

        let value = result.value;
        if (!(Number(value))) {
            try {
        let parts = value.split(/[+\-*\/]/);
        if (!(parts.length < 2)) {
            let operatorIndex = value.includes('+') ? value.indexOf('+') : value.includes('-') ? value.indexOf('-') : value.includes('*') ? value.indexOf('*') : value.includes('/') ? value.indexOf('/') : null;
            operand1 = value.slice(0, operatorIndex);
            operator = value.slice(operatorIndex, operatorIndex + 1);
            operand2 = value.slice(operatorIndex + 1);
            result.value = operate(operand1, operator, operand2);
        }
        return;
    } catch (error) {
        console.log("Error! Invalid character input!");
    } finally {
        return;
    }
}
    }));
}

// perform calculation
let resultDisplay = document.querySelector('.result');
let result = resultDisplay.value;

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