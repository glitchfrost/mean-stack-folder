//reverser a number using loop 1,2,3,4,5 ->5,4,3,2,1

const readline = require("readline-sync")

let input = readline.question("Enter the array : ")
let arr = input.split(" ").map(Number);

let reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}
console.log("Reversed Array:", reversedArr);