let num1 = Math.floor(Math.random() * 899) + 100;
let num2 = Math.floor(Math.random() * 899) + 100;
let num3 = Math.floor(Math.random() * 899) + 100;
let num4 = Math.floor(Math.random() * 899) + 100;
let num5 = Math.floor(Math.random() * 899) + 100;

let min = 1000;
let max = 100;
if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
    max = num1;
}else if(num2 > num3 && num2 > num4 && num2 > num5){
    max = num2;
}else if(num3 > num4 && num3 > num5){
    max = num3;
}else if(num4 > num5){
    max = num4;
}else{
    max = num5;
}

if(num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5){
    min = num1;
}else if(num2 < num3 && num2 < num4 && num2 < num5){
    min = num2;
}else if(num3 < num4 && num3 < num5){
    min = num3;
}else if(num4 < num5){
    min = num4;
}else{
    min = num5;
}

console.log(num1, num2, num3, num4, num5);
console.log("Max: " + max);
console.log("Min: " + min);