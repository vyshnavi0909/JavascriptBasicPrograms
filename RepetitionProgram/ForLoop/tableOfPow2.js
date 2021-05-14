const readline = require("readline").createInterface({
    input : process.stdin,
    output: process.stdout
});

readline.question("Enter a number: \n", num => {
    let x = 1;
    for(let i = 1; i <= num; i++){
        x = x * 2;
        console.log(x);
    }
    readline.close();
});