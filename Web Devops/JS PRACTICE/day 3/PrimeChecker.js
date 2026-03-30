let n = 12;
let isPrime = true; 

for (let i = 2; i <= n - 1; i++) {
  if (n % i == 0) {
    isPrime = false; 
    break;
  }
}

if (isPrime) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}