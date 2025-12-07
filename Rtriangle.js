/*print a right angle triangle of numbers
1
12
123
1234
12345*/

const readline = require("readline-sync");

let n = Number(readline.question("Enter the number of rows: "));

for(let i=1;i<=n;i++){
    let row=""
    for(let j=1;j<=i;j++){
        row+=j
    }
    console.log(row)
}