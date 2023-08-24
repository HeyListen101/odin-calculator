const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const back = document.querySelector('.back');
const negate = document.querySelector('.negate');
const displayOne = document.querySelector('.display-one');
const displayTwo = document.querySelector('.display-two');
let newOperator = false;
let prevOperator = null;
let valA, valB;

document.body.addEventListener('keypress', event => {
    let input = event.code.slice(5);

    if (input >= '0' && input <= '9') {
        if (newOperator) displayTwo.textContent = '';
        newOperator = false;
        displayTwo.textContent += input;
    }
});

nums.forEach(num => num.addEventListener('click', () => {
    if (newOperator) displayTwo.textContent = '';
    newOperator = false;
    if (!displayTwo.textContent.includes('.') || num.textContent != '.') displayTwo.textContent += num.textContent;
}));

operators.forEach(operator => operator.addEventListener('click', () => {
    if (!newOperator) {
        valB = Number(displayTwo.textContent);
        
        if (prevOperator == null) valA = valB;
        else if (prevOperator == '+') {
            valA = add(valA, valB);
        } else if (prevOperator == '-') {
            valA = subtract(valA, valB);
        } else if (prevOperator == '/') {
            valA = divide(valA, valB);
        } else if (prevOperator == 'x') {
            valA = multiply(valA, valB);
        }
        displayTwo.textContent = valA;
    }

    displayOne.textContent = displayTwo.textContent + ' ' + operator.textContent;
    prevOperator = operator.textContent;
    newOperator = true;
}));

negate.addEventListener('click', () => {
    if (displayTwo.textContent != '' && Number(displayTwo.textContent) != 0) {
        if (displayTwo.textContent[0] == '-') displayTwo.textContent = displayTwo.textContent.slice(1);
        else displayTwo.textContent = '-' + displayTwo.textContent;
    }
});

clear.addEventListener('click', () => {
    displayOne.textContent = '';
    displayTwo.textContent = '';
    newOperator = false;
    prevOperator = null;
});

back.addEventListener('click', () => {
    displayTwo.textContent = displayTwo.textContent.slice(0, displayTwo.textContent.length - 1);
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}