// Exercise 1
/*Write a function testNum that takes a number as an argument and returns a Promise 
that tests if the value is less than or greater than the value 10. 
Log the result to the console.
*/

// const testNum = (number) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (number > 10) {
//                 resolve('RESOLVED!');
//                 console.log('it is greater than 10');
//             } else {
//                 reject('error: it is not greater than 10');
//             }
//         },2000)
//     });
// }

// testNum(9)
//     .then((resolve) => {
//         console.log(resolve)
//     })
//     .catch((error) => {
//         console.log(error)
//     });

// Exercise 2
/* Write two functions that use Promises that you can chain! The first function, 
makeAllCaps(), will take in an array of words and capitalize them, 
and then the second function, sortWords(), will sort the words in alphabetical order. 
If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (array) => 
    new Promise((resolve, reject) => {
        if (
            array.every(item => {
                return typeof item == 'string';
            })           
        ) {
            resolve(
                sortWords(
                    array.map(item => {
                        return item.toUpperCase()
                    })                        
            ));
        } else {
            reject('error: NOTT ALL STRINGS');
        }
    });

const sortWords = (array) => 
    new Promise((resolve, reject) => {
        if (array) {
            resolve(array.sort());
        } else {
            reject('no these are not all strings')
        }
    });

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];


makeAllCaps(arrayOfWords)
    .then((resolve) => console.log(resolve))
    .catch((error) => console.log(error));