let d = new Date().getDate();
let m = new Date().getMonth() + 1;

console.log(d);
console.log(m);

if(m > 3 && m < 6){
    console.log("True");
}else if(m = 3 && d > 20){
    console.log("True");
}else if(m = 6 && d < 20){
    console.log("True");
}else{
    console.log("False");
}