const { exit } = require("process");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number:\n", number =>{
    let x = 1;
    let i = 1;
    while(i<= number){
        x = x * 2;
        console.log(x);
        i++;
        if(x == 256){
            exit;
        }
    }
    readline.close();
})