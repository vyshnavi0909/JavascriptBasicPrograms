let year = Math.floor(Math.random() * 1022) + 1000;
console.log(year);

let by4 = year % 4;
let by100 = year % 100;
let by400 = year % 400;
if( (by4 == 0) && (by100 !== 0) || (by400 == 0)){
    console.log("Leap year");
}else{
    console.log("Not leap year");
}