const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
const even = numbers.filter((n) => n % 2 === 0);

console.log("map:", doubled);
console.log("filter:", even);
