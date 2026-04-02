let n = 12;
let remainders = [];

while(n > 0){
let digit = n % 2;
remainders.push(digit);
n = Math.floor(n /2);
}

console.log(remainders.reverse())