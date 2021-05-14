const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number: \n", num => {
    console.log(num + " feets = " + num * 12 + " inches");
    console.log(num + " feets = " + num * 0.3048 + " meters");
    console.log(num + " inches = " + num * 0.0833333 + " feets");
    console.log(num + " meters = " + num * 3.28084 + " feets");    
readline.close();
});
