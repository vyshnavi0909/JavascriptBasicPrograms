const min = 1;
const max = 100;
let arr = [];

for(let count = min; count <= max; count++){
    if(count % 11 == 0){
        arr.push(count);
    }
}
console.log(arr);