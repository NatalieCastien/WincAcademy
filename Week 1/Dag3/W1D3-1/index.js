// Deel 1

let person = {
    name: "Pietje",
    age: 20,
    evaluations: [7, 10, 9]
}

console.log(person);

console.log(person.name);
console.log(person['age']);

console.log(person.evaluations);
// Value= [7, 10, 9]


// Deel 2
let colors = ["purple", "mintgreen", "teal"];
console.log(colors);
console.log(colors.length);
console.log(colors[0]);

let arrayLength = colors.length;
let lastElement = arrayLength -1;
console.log(colors[lastElement]);

colors.push('pink');
colors.push(4);
colors.push({greeting: "hi ik ben een object"});
console.log(colors);

arrayLength = colors.length;
lastElement = arrayLength -1;

console.log("laatste element: " + Object.keys(colors[lastElement]));


// Deel 3
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
		food: {
			favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
	{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
			favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
	{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
			favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]

// 1
let arrayLength = catBreeds.length;
let lastElement = arrayLength -1;
console.log("Laatste kattenras:", catBreeds[lastElement].name);

// 2
console.log("Energy level eerste kat:", catBreeds[0].energy_level);

// 3
console.log("1e Temperament van 2e kat:", catBreeds[1].temperament[0]);

// 4
let thirdCatTemperaments = catBreeds[2].temperament;
let nrOfTemperaments = thirdCatTemperaments.length;
let lastTemperament = nrOfTemperaments -1; 
console.log("laatste Temperament van 3e kat:", thirdCatTemperaments[lastTemperament]);

// 5
let thirdCatFood = catBreeds[2].food;
console.log("favorite food of 3rd cat:", thirdCatFood.favourite_food);