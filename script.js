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

function operate(operator, a, b) {
    if (operator == 'add') {
        return add(a, b);
    } else if (operator == 'sub') {
        return subtract(a, b);
    } else if (operator == 'mul') {
        return multiply(a, b);
    } else if (operator == 'div') {
        return divide(a, b);
    }
}