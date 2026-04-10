let arr = [1,2,4,5,6];
let n = 6;
let sum = 0;
let sum2 = n * (n+1) / 2;
let digit = 0;


for(let i = 0; i < arr.length; i++){
sum += arr[i];
}

digit = sum2 - sum;
console.log(digit);