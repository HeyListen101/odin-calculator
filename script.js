const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');
const back = document.querySelector('.back');
const displayOne = document.querySelector('.display-one');
const displayTwo = document.querySelector('.display-two');
let currOperator = null;
let valueA, valueB, decimalDiv, isDecimal;

 document.body.addEventListener('keypress', event => {
     displayOne.textContent += event.code.slice(5);
 });

nums.forEach(num => num.addEventListener('click', () => {
    displayOne.textContent += num.textContent;
    console.log(displayOne.textContent);
    if (currOperator == null) {
        displayTwo.textContent = displayOne.textContent;
    } else if (!isDecimal && num.textContent != '.') {
        valueB = valueB * 10 + Number(num.textContent);
    } else if (num.textContent != '.') {
        valueB = valueB + Number(num.textContent) / decimalDiv;
        decimalDiv *= 10;
    }

    if (num.textContent == '.') isDecimal = true;

    if (currOperator == '+') {
        displayTwo.textContent = add(valueA, valueB).toString();
    } else if (currOperator == '-') {
        displayTwo.textContent = subtract(valueA, valueB).toString();
    } else if (currOperator == 'x') {
        displayTwo.textContent = multiply(valueA, valueB).toString();
    } else if (currOperator == '/') {
        displayTwo.textContent = divide(valueA, valueB).toString();
    }
}));

operators.forEach(operator => operator.addEventListener('click', () => {
    
    valueA = Number(displayTwo.textContent);
    valueB = 0;

    if (!isOperator(displayOne.textContent[displayOne.textContent.length - 1]) && displayOne.textContent != '') {
        displayOne.textContent += operator.textContent;
        currOperator = operator.textContent;
        isDecimal = false;
        decimalDiv = 10;
        if (currOperator == '=') displayOne.textContent = displayTwo.textContent;
    }
}));

clear.addEventListener('click', () => {
    displayOne.textContent = '';
    displayTwo.textContent = '';
    currOperator = null;
    valueA = 0;
    valueB = 0;
    isDecimal = false;
    decimalDiv = 10;
});

back.addEventListener('click', () => {
    displayOne.textContent = displayOne.textContent.slice(0,displayOne.textContent.length - 1);
    let lastChar = displayOne.textContent[displayOne.textContent.length - 1]; 
    if (lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') {
        displayTwo.textContent = Number(valueA);
    }
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

function isOperator(o) {
    return o == '+' || o == '-' || o == 'x' || o == '/' || o == '.';
}