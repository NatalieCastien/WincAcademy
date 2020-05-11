const calculateDogAge = (puppyAge, conversionRate) => {
    const dogYears = puppyAge * conversionRate;
    console.log("Your doggie is " + dogYears + " years old in dog years!"); 
}

calculateDogAge(5, 7);
calculateDogAge(2, 10);
calculateDogAge(8, 11);