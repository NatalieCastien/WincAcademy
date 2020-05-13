// A
const array = ["nice", "awesome", "tof"];
console.log(array);

const addTheWordCool = function(array){
    array.push('cool');
    return array;
}
console.log("Add cool:", addTheWordCool(array));

// B
const amountOfElementsInArray = (array) => array.length;
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

// C
const selectBelgiumFromBenelux = (array) => array[0];
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 

// D
const lastElementInArray = (array) => {
    const lengthArray = array.length;
    // console.log(lengthArray);
    return array[lengthArray-1];
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

// E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

// slice copies an array
const impeachTrumpSlice = function(array) {
    const newPresidentArray = array.slice(1 , 4);
    console.log("nieuwe array: " + newPresidentArray);
    return newPresidentArray;    
}
// splice mutates the array itself
const impeachTrumpSplice = function(array) {
    const removedPresident = array.splice(0, 1);
    console.log("impeached: "+ removedPresident);
    return array;
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F
const stringsTogether = (array) => {
    return array.join(' ');
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

// G
const combineArrays = (array1, array2) => {
    const combined = array1.concat(array2);
    console.log(combined);
}
combineArrays([1,2,3], [4,5,6]) 
// resultaat: [1,2,3,4,5,6] 

