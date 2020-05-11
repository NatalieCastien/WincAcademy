const calculateSupply = (age, amountPerDay) => {
    const maxAge = 90;
    const yearsRemaining = maxAge - age;
    const amountPerDayFloat = Math.round(parseFloat(amountPerDay));
    const amountPerYear = amountPerDayFloat * 365.25;
    const amount = Math.round(yearsRemaining * amountPerYear);
    console.log("You will need " + amount + " to last you until the rip old age of " + maxAge);
}

calculateSupply(28, 2);
console.log((90-28)*365.25);