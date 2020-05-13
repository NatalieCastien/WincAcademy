const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

//  FILTER
const filteredItems = items.filter((item) => {
    return item.price <= 100;
})

console.log(filteredItems);

// MAP - make new array of it
const itemNames = items.map((item) => {
    return item.name;
})
console.log(itemNames);

// FIND
const foundItem = items.find((item) => {
    return item.name == 'Bike';
})

console.log(foundItem);

// FOREACH
items.forEach((item) => {
    console.log(item);
});

// SOME -- returns true or false  - checks if anything in the array meets the statement
const someItems = items.some((item) => {
    return item.price < 50;
})
console.log(someItems);

// EVERY
const everyIsExpensive = items.every((item) => {
    return item.price > 100;
})
console.log(everyIsExpensive);

// REDUCE - returns combination of operations. 
// Takes another parameter (property in which we want to reduce everyting into - value after each iteration)
// And as a second parameter the item
// another parameter at the end = starting point (now 0)
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0)

console.log(total);

// INCLUDES - single argument, nota function
const numbers = [1,2,3,4,5];
const includesTwo = numbers.includes(2);
console.log(includesTwo);
