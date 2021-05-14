const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number: \n", num=>{
    let arr = [];
    let isPrime = 0;
    for(let i = 2; i <= num; i++){
        for(let j = 2; j< i; j++){
            if(i % j == 0){
                isPrime = 1;
                break;
            }else{
                isPrime = 0;
            }
        }
        if(isPrime == 0){
            if(num % i == 0){
                arr.push(i);
            }
        }
    }
    console.log(arr);
    readline.close();
})