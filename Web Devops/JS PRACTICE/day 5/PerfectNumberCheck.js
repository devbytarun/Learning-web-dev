let n = 8;
let digit = 0;
let sum = 0;

for (let i = 1; i <= n - 1; i++) {
  if (n % i == 0) {
    digit = i;
    sum = sum + digit;
  }
}



if (sum === n) {
  console.log("Perfect Number");
} else {
  console.log("Not Perfect Number");
}

console.log(sum);