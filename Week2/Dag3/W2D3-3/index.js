// A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}
]
    
const findSpiderMan = (array) => {
    return array.find((hero) => hero.name == 'Spiderman'); 
}    
console.log(findSpiderMan(superheroes)) 

// B
const doubleArrayValues = (array) => {
    let doubleArray = [];
    array.forEach((integer) => {
        doubleArray.push(integer * 2);
    });
    return doubleArray;
}
console.log(doubleArrayValues([1, 2, 3])); 

// OR with map
const doubled = (array) => {
    const newArray = array.map((integer) => integer * 2);
    return newArray;
}

console.log(doubled([1, 2, 3]))

// C 
const containsNumberBiggerThan10 = (array) => {
    return array.some((int) => int > 10);
};
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true

// D
const isItalyInTheGreat7 = (array) => {
    return array.includes("Italy");
}
console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));
// result should be true

// E
const tenfold = (array) => {
    newArray = [];
    array.forEach((integer) => {
        newArray.push(integer * 10);
    });
    return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))

// OR with map
const tenfoldWithMap = (array) => {
    const newArray = array.map((int) => int * 10);
    return newArray;
}
console.log(tenfoldWithMap([1, 4, 3, 6, 9, 7, 11]));

// F
const isBelow100 = (array) => {
    return array.every((int) => int < 100);
};
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false

// G
const bigSum = (array) => {
    const totalSum = array.reduce((total, int) => {
        return int + total;
    }, 0);
    return totalSum;
}
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118