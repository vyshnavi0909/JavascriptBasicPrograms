const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number:\n", num =>{
    let isPrime = 0;
    if(num == 1){
        console.log(num + " is neither prime nor composite");
    }else if(num == 2){
        console.log(num  + " is prime");
    }else{
        for(let i = 2; i < num; i++){
            if(num%i == 0){
                isPrime = 1;
            }
        }
        if(isPrime == 0){
            console.log(num + " is a prime");
        }else{
            console.log(num + " is not a prime");
        }
    }
    
    readline.close();
});