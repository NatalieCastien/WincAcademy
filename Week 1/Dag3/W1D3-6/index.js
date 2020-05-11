// Greeting and asking for name
const name = prompt('Greetings! What is your name?');
// // After input name a message with Hey name
alert("Hey " + name + "!");
const min = parseInt(prompt("I think of a number, and you have to guess it. What is the smallest number you want to guess from?"));
const max = parseInt(prompt("And what is the largest number you want to guess?"));

// Generate random number between 0 to 25
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

// Check input from user
let numberOfGuesses = 0;
let maxNumberOfGuesses = 5;

const checkInput = (input, noOfGuesses) => {
    if (input != randomNumber && noOfGuesses < maxNumberOfGuesses) {
        alert('try again, you have ' + (5 - noOfGuesses) + " guesses left!");
        askInput();
    } else if (input != randomNumber && noOfGuesses == 5) {
        alert("Game over, you have guessed 5 times");
        alert("Bye " + name + ". See you next time!");
    } else {
        alert("Congrats, You've won!");
        alert("Bye " + name + ". See you next time!");
    }
}

// Ask user new question for input with a number

const askInput = () => {
    let input = prompt("Enter a number from 0 to 25 for your first guess");
    numberOfGuesses++;
    let guess = parseInt(input);
    checkInput(guess, numberOfGuesses);
}

askInput();








