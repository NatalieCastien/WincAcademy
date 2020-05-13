const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    // Objects
    console.log("Dit is gehele persoon: " + person);

    // Names
    console.log("Naam: " + person.name);

    // Birth year
    const currentYear = new Date().getFullYear();
    const yearOfBirth = currentYear - person.age;
    console.log("Geboortejaar: " + yearOfBirth);

    // Names and profession
    console.log(person.name + " with the profession: " + person.profession);

    // If statement
    if (person.age > 50) {
        console.log(person.name + " is older than 50")
    }
  }