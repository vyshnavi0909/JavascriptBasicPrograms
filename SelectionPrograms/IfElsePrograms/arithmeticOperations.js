const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter any 3 numbers by space seperated: \n", string => {
    let arr = string.split(" ");
    let a = parseInt(arr[0]);
    let b = parseInt(arr[1]);
    let c = parseInt(arr[2]);
    let res1 = a + (b * c);
    let res2 = (a % b) + c;
    let res3 = c + ( a / b );
    let res4 = (a * b) + c;
    console.log("a + b * c = " + res1);
    console.log("a % b + c = " + res2);
    console.log("c + a / b = " + res3);
    console.log("a * b + c = " + res4);
readline.close();
});