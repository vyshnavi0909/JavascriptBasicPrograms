const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number: ", num =>{
    let sum = 0;
    let x ;
    for(let i =1; i <= num; i++){
        x = 1 / i;
        sum += x; 
    }
    console.log(sum);
    readline.close();
});