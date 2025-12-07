//sum of digit of number sample input 5,6,7 output 18

const readline = require("readline-sync");

let num1 = readline.question("Enter Number1: ");
let num2 = readline.question("Enter Number2: ");

num1 = Number(num1);
num2 = Number(num2);

console.log("Total Sum:", num1 + num2);
