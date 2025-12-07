//check prime or not sample input 2,1,3

const readline=require("readline-sync")

let num=readline.question("Enter a number: ");
num=Number(num);

const isPrime=(num)=>{
    if(num<2) return false;

    for(let i=2;i<=Math.sqrt(num);i++){
        if (num % i === 0) return false;
    }
    return true;
}

if(isPrime(num)){
    console.log("it is prime.")
}else{
    console.log("its not prime.")
}

