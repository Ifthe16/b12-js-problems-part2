/**
 * shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
*/

function clothQuantity(shirtQuantity, pantQuantity, shoeQuantity) {
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    const shirtTotalPrice = shirtQuantity * perShirtPrice;
    const pantTotalPrice = pantQuantity * perPantPrice;
    const shoeTotalPrice = shoeQuantity * perShoePrice;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalPrice;
}

const cloth = clothQuantity(3, 4, 2);
console.log('total clothes price', cloth);