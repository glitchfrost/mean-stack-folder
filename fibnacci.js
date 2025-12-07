/*print Fibonacci series n number (5) 0,1,1,2,3 */

const readline=require("readline-sync")

let n=Number(readline.question("Enter the Number for Fibannaci series: "))

const fib=(n)=>{
    if(n === 0 )return 0;
    if(n === 1 )return 1;
    return fib(n-1) + fib(n-2);
}

for (let i = 0; i < n; i++) {
    console.log(fib(i));
}