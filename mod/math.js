const add = (num1, num2) => {
    return num1 + num1;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const calculate = (num1, num2, operation) => {
    operations = ["+", "-", "/", "*"]

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Input numbers are of an invalid datatype. Only the "number" datatype is allowed');
    }

    if (!operations.includes(operation)){
        throw new Error('Invalid Operation, Valid operations include: +,-,/,*');
    }

    // if parsed operation is + (addition)
    if (operation === operations[0]) {
        return add(num1, num2);
    }

    // if parsed operation is - (subtraction)
    else if (operation === operations[1]) {
        return subtract(num1, num2);
    }

    // if parsed operation is / (division)
    else if (operation === operations[2]) {
        return divide(num1, num2);
    }

    // if parsed operation is * (multiplication)
    else {
        return multiply(num1, num2);
    }
}

// export default calculate;
export default { calculate, add };