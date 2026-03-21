const numbers = [10, 20, 30, 40];

const allPositive = numbers.every((n) => n > 0);
const sum = numbers.reduce((total, n) => total + n, 0);

console.log("every > 0:", allPositive);
console.log("sum:", sum);
