let count = 0;
let arr = [];
while(count < 10){
    let num = Math.floor(Math.random()*899)+100;
    arr.push(num);
    count++;
}
arr.sort();
console.log("Second Minimum Number: " + arr[1]);
console.log("Second Maximum Number: " + arr[arr.length-2]);