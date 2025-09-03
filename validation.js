function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number';
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, 7);
const result2 = multiply(5, '7');
const result3 = multiply(5, 'seven');
const result4 = multiply([5], [7]);
const result5 = multiply([5, 1], [7]);
const result6 = multiply(5);
const result7 = multiply(5 + 7);
const result8 = multiply(5 * 7, 5 + 9);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);

function fullName(first, second) {
    if (typeof first !== 'string') {
        return 'First name should be a string';
    }
    else if (typeof second !== 'string') {
        return 'Second name should be a string';
    }

    const full = first + ' ' + second;
    return full;
}

const full = fullName('Rahan', 'Sohan');
console.log(full);

const full2 = fullName('Akmal');
console.log(full2);

function getPrice(product) {
    if (typeof product !== 'object') {
        return 'Please provide an object';
    }
    const price = product.price;
    return price;
}

const price = getPrice({ name: 'chulkani dandi', price: 35, color: 'blue' });
console.log(price);

const price2 = getPrice(52);
console.log(price2);

function getSecond(numbers) {
    if (Array.isArray(numbers) === false) {
        return 'Please provide an array';
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([1, 25, 69]);
console.log(second);

const second2 = getSecond(45);
console.log(second2);