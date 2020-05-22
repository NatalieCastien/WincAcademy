// 1
const sum = (...numbers) => numbers.reduce((prev, cur) => prev + cur, 0);
console.log(sum(1,2,3,4,5));


// 2
const sum2 = (num1, num2, num3) => num1 +  num2 + num3;
const numbers = [3,4,5];
console.log(sum2(...numbers));

