// A
/* Dutch Sandwich
- Get a slice of bread
- Add butter
- Add Cheese
- Put a slice of bread on top
*/

const makeDutchSandwich = () => {
    console.log("Get a slice of bread");
    console.log("Add butter");
    console.log("Add Cheese");
    console.log("Put a slice of bread on top");
};

makeDutchSandwich();


// B
// This is the declaration (or actually the function expression) of the function
const makeSandwich = (topping) => {
    console.log("There you go, a sandwich with", topping);
};

// Here the function gets called
makeSandwich('hummus');
makeSandwich('egg');


// C
const calculateDiscountedPrice = (totalAmount, discount) => {
    const price = totalAmount - discount;
    return Math.round(price);
}

console.log(calculateDiscountedPrice(25, 12,25));


// D
const calculateDiscountedPrice2 = (totalAmount, discount) => {
    if(totalAmount > 25) {
        const price = totalAmount - discount;
        return Math.round(price);    
    } else {
        return totalAmount;
    }
}

console.log(calculateDiscountedPrice2(22, 13,23));
