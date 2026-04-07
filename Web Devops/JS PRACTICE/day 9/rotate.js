let arr = [1, 2, 3, 4, 5];
let k = 2;

let result1 = arr.slice(arr.length - k);

let result2 = arr.slice(0, arr.length - k);

let result = [...result1,...result2];

console.log(result);