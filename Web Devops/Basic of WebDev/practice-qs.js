const numbers = [1, 2, 3, 4, 5];

// Q1: square all numbers
const squares = numbers.map((n) => n * n);

// Q2: keep only odd numbers
const odds = numbers.filter((n) => n % 2 !== 0);

// Q3: find total
const total = numbers.reduce((sum, n) => sum + n, 0);

console.log("squares:", squares);
console.log("odds:", odds);
console.log("total:", total);
