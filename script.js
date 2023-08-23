const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const back = document.querySelector('.back');
const displayOne = document.querySelector('.display-one');
const displayTwo = document.querySelector('.display-two');
let newOperator = false;
let prevOperator = null;
let valA, valB;

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