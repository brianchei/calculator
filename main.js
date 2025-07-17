// universal variables
let operand1;
let operator;
let operand2

// arithmetic methods
const add = function(addend, addend2) {
	let sum = Number(addend) + Number(addend2);
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
    if (divisor === '0') {
        return `Imagine that you have ${dividend} cookies and you split them evenly among zero friends. How many cookies does each person get? See? It doesn’t make sense. And Cookie Monster is sad that there are no cookies, and you are sad that you have no friends.`;
    }
    let quotient = dividend / divisor;
    return quotient;
};

// operation method
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
    // element selectors
    let result = document.querySelector('.result');
    let btns = document.querySelectorAll('.button');

    // expression variables
    let currTerm = 1;
    let expOperator = '';
    let term1 = '', term2 = '';
    let solutionDisplayed = false;

    // listeners for input
    document.addEventListener('keydown', handler);

    btns.forEach(btn => {
        btn.addEventListener('click', handler)
    });

    // map input to functionality
    function handler(event) {
        let keyPressed = '';        
        // check/assign valid input
        if (event.type === 'click') {
            keyPressed = event.currentTarget.textContent;
        } else {
            switch (true) {
                case (!isNaN(event.key)):
                    keyPressed = event.key;
                    break;
                case (event.key === 'Enter'):
                    keyPressed = '=';
                    break;
                case (event.key === 'Backspace'):
                    keyPressed = 'DEL';
                    break;
                case (event.key === '+'):
                    keyPressed = '+';
                    break;
                case (event.key === '-'):
                    keyPressed = '-';
                    break;
                case (event.key === '*'):
                    keyPressed = '*';
                    break;
                case (event.key === '/'):
                    keyPressed = '/';
                    break;
                default:
                    return;
            }
        }

        // clear functionality
        if (keyPressed === 'CLEAR') {
            result.value = '';
            expOperator = '', term1 = '', term2 = ''; currTerm = 1;
            return;
        }

        // del functionality
        if (keyPressed === 'DEL') {
            if (currTerm === 1 && term1 != '') {
                term1 = term1.slice(0, -1);
                result.value = result.value.slice(0, -1);
            } else if (currTerm === 2 && term2 != '') {
                term2 = term2.slice(0, -1);
                result.value = result.value.slice(0, -1);
            }
            return;
        }

        // button press logic flow, inverted if's
        if (!(keyPressed === '+' || keyPressed === '-' || keyPressed === '*' || keyPressed === '/')) {
                if (!(keyPressed === '=')) {
                    if (!(keyPressed === '.')) {
                        // # logic
                        if (solutionDisplayed) {
                            result.value = '';
                            solutionDisplayed = false;
                        }
                        if (!(currTerm === 1)) {
                            term2 += keyPressed;
                            result.value += keyPressed;
                            return;
                        }
                        term1 += keyPressed;
                        result.value += keyPressed;
                        return;
                    }
                    // . logic
                    if (currTerm === 1 && !(term1.includes('.'))) {
                        term1 += '.';
                        result.value += keyPressed;
                        return;
                    }
                    if (currTerm === 2 && !(term2.includes('.'))) {
                        term2 += '.';
                        result.value += keyPressed;
                        return;
                    }
                }
                // = logic
                if (!(term2 === '')) {
                    // round decimal if over 3 decimal places
                    solution = operate(term1, expOperator, term2);
                    solutionString = solution.toString();
                    if (+solution
                        && solutionString.includes('.') 
                        && (solutionString.length - solutionString.indexOf('.')) > 4) {
                        solution = solution.toFixed(3);
                    }
                    
                    result.value = solution;
                    solutionDisplayed = true;
                    expOperator = '', term1 = '', term2 = ''; currTerm = 1;
                    return;
                }
                return;
        }
        // +-*/ logic
        // case: operating on result (solution)
        if (solutionDisplayed) {
            term1 = result.value;
            expOperator = keyPressed;
            result.value += keyPressed;
            currTerm = 2;
            solutionDisplayed = false;
            return;
        }
        // fix more than single pair of numbers
        if (!(term2 === '')) {
            solution = operate(term1, expOperator, term2);
            result.value = solution + keyPressed;
            solutionDisplayed = true;
            expOperator = keyPressed, term1 = solution, term2 = ''; currTerm = 2;
            return;
        }
        // fix operator chosen after another operator
        if (!(expOperator === '')) {
            expOperator = keyPressed;
            result.value = result.value.slice(0, -1);
            result.value += expOperator;
            return;
        }
        if (!(term1 === '')) {
            expOperator = keyPressed;
            result.value += keyPressed;
            currTerm = 2;
            return;
        }
        // default set first term to zero when operator input
        term1 = 0;
        expOperator = keyPressed;
        result.value += keyPressed;
        currTerm = 2;
        return;
    }
}

// perform calculation
let resultDisplay = document.querySelector('.result');
let result = resultDisplay.keyPressed;

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

// run program
popDisplay();