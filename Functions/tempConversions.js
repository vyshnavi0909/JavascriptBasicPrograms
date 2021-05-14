const readline = require("readline").createInterface({
    input: process.stdin,
    output:process.stdout
});

function convertingToFahrenheit(temp){
    let x = 9/5;
    let y = x * temp;
    let degF = y + 32;
    console.log(temp + "C = " + degF + "F");
}

function convertingToCelsiuc(temp){
    let x = temp - 32;
    let y = 5/9;
    let degC = x * y;
    console.log(temp + "F = " + degC + "C" );
}

readline.question("Enter temp in C(0 to 100) or F(32 to 212) and also mention degrees with space seperated:", input =>{
    let arr = input.split(" ");
    let temp = parseInt(arr[0]);
    let degrees = arr[1];
    if(degrees == "C" || degrees == "c"){
        convertingToFahrenheit(temp);
    }else if(degrees == "F" || degrees == "f"){
        convertingToCelsiuc(temp);
    }else{
        console.log("Invalid input");
    }
    readline.close();
});