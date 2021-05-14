//random single digit number
let ranSingleDigitNum = Math.floor(Math.random()*10);
console.log("Random single digit number: " + ranSingleDigitNum);

//random dice number between 1 to 6
let diceNumber = Math.floor(Math.random() * 6) + 1;
console.log("Random dice number: " + diceNumber);

//adding two random dice numbers
let num1 = Math.floor(Math.random() * 6) + 1;
let num2 = Math.floor(Math.random() * 6) + 1;

let add = num1 + num2;
console.log("Sum of two dice numbers: " + add);

//5 random 2 digit numbers
let n1 = Math.floor(Math.random() * 89) + 10;
let n2 = Math.floor(Math.random() * 89) + 10;
let n3 = Math.floor(Math.random() * 89) + 10;
let n4 = Math.floor(Math.random() * 89) + 10;
let n5 = Math.floor(Math.random() * 89) + 10;

let sum = n1 + n2 + n3 + n4 + n5;
let avg = (n1 + n2 + n3 + n4 + n5)/5;
console.log(sum);
console.log(avg);

//Conversions
//converting inches into feets
let a = 12;
let b = 42;
let result = b/a;

console.log("42 inches = " + result + " feets");

//calculating area of rectangle in meters
let length = 60;
let breadth = 40;
let area = length * breadth;
let areaInMeters = area * 0.092903;

console.log("Area of rectangle in meters : " + areaInMeters);

//area of 25 plots in acres
let plots = 25;
let totalAreaInMeters = plots * areaInMeters;
let areaInAcres = totalAreaInMeters * 0.0002471052750734723;
console.log("Area of 25 plots in acres: " + areaInAcres);