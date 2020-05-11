const colors = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < 4) {
  console.log(colors[i]);  
  i++;
}

for (i=0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(color => console.log(color));

// Vragen
// 1. 3
// 2. 1
/* 3. Vrijwel direct zichtbaar wat het doet. Ik ben de forloops gewend, maar ik vind 
    de forEach loop beter leesbaar, en dat het korter is, is erg fijn. */
// 4. 

const person = {
    name: "piet",
    age: 23,
    city: "Amsterdam",
    pets: 5,
    children: 6
}

// With this you print the entire object
console.dir(person);

// with foreach you can loop through the array and log every key/value pair
Object.entries(person).forEach(pair => {
    console.log(pair)
});