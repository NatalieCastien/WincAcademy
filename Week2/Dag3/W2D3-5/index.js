const superheroes = [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "All-American Comics #16",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ];

//   1
  const nameArray = superheroes.map((superhero) => superhero.name);
  console.log(nameArray);

//   2
  const lightHeroes = superheroes.filter((superhero) => {
      const weight = parseInt(superhero.weight);
      return weight < 190;
  })
  console.log(lightHeroes);

//   3
//   const heroesOf200 = superheroes.filter((superhero) => {
//       const weight = parseInt(superhero.weight);
//       return weight == 200;
//   });
//   const twohundredPounders = heroesOf200.map((hero) => hero.name);

//   console.log(twohundredPounders);

  const twoh = superheroes.filter(hero => {
      const weight = parseInt(hero.weight);
      return weight == 200;
  }).map((hero) => hero.name);

  console.log(twoh);

//   4
  const comics = superheroes.map((hero) => hero.first_appearance);
  console.log(comics);
  
//   5
  const dcHeroes = superheroes.filter((hero) => {
      return hero.publisher == 'DC Comics';
  }).map((hero) => hero.name);
  console.log(dcHeroes);

  const marvelHeroes = superheroes.filter((hero) => {
      return hero.publisher == 'Marvel Comics';
  }).map((hero) => hero.name);
  console.log(marvelHeroes);

//   6
  const dcSuperheroes = superheroes.filter((hero) => {
      return hero.publisher == 'DC Comics';
  });
  
  const totalWeightDC = dcSuperheroes.reduce((total, hero) => {
      if (hero.weight != 'unknown') {
          weight = parseInt(hero.weight);
          return weight + total;
      };
      return total;        
  }, 0);

  console.log(totalWeightDC);

//   7
  const marvelSuperheroes = superheroes.filter((hero) => {
      return hero.publisher == 'Marvel Comics';
  });

  const totalWeightMarvel = marvelSuperheroes.reduce((total, hero) => {
      if (hero.weight != 'unknown') {
          weight = parseInt(hero.weight);
          return weight + total;
      };
      return total;        
  }, 0);

  console.log(totalWeightMarvel);

// 8
//   Make array of heroes only with a known weight
  const knownWeight = superheroes.filter((hero) => {
        return hero.weight != "unknown";
  });

// Make an array of weights as integers instead of strings
  const integerWeight = knownWeight.map((hero) => {
    return parseInt(hero.weight);
  });

// Look for the biggest integer in the weight array
  const heaviest = (array) => {
      return Math.max(...array);
  };

// Find the superhero with the same weight as the biggest weight
  const heaviestSuperhero = superheroes.filter((hero) => {
      const heroWeight = parseInt(hero.weight);
      return heroWeight == heaviest(integerWeight);
  })

  console.log(heaviestSuperhero);