const age = 28;
const isFemale = true;
const driverStatus = 'bob';

if (age >= 18) {
    console.log('Je bent oud genoeg, dus mag je naar binnen');
} else {
    console.log('Sorry, je bent te jong en mag niet naar binnen');
}

if (isFemale == true) {
    console.log("Je mag naar binnen, want het is ladiesnight");
} else {
    console.log("Sorry, dit is een beetje discriminerend, maar je mag niet naar binnen.")
}

if (driverStatus == 'bob') {
    console.log('Je bent bob, dus je mag rijden');
} else {
    console.log('Je bent geen bob, dus je mag helemaal niet rijden.')
}

// Deel 1
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting op bier!");
} else {
    console.log("Jij krijgt geen korting..");
}

// Deel 2
const name = "Sarah";

if (name === "Sarah" || name === "Bram") {
    console.log('Je krijgt een gratis biertje!');
} else {
    console.log('Jij moet betalen');
}

// Deel 3
const totalAmount = 150;

if (totalAmount > 100) {
    console.log("Jij krijgt gratis champagne!");
} else if (totalAmount > 50) {
    console.log("Jij krijgt een gratis portie nachos!");
} else if (totalAmount > 25) {
    console.log("Jij krijgt gratis (vega)bitterballen!")
} else {
    console.log("Jij krijgt niets");
}