const numbers = [300, 100, 700, 1200];

function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

const sum = sumOfNumbers(numbers);
console.log('sum of the numbers is', sum);


const products = [
    { name: 'shampoo', price: 300 },
    { name: 'chiruni', price: 100 },
    { name: 'shirt', price: 700 },
    { name: 'pant', price: 1200 },
];

function getShoppingTotal(products) {
    let total = 0;
    for (const product of products) {
        total += product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('total ajke khosabe: ', total);