const scores = [56, 99, 72, 88, 100, 67];

const maxWithMath = Math.max(...scores);
const maxWithReduce = scores.reduce((max, n) => (n > max ? n : max), scores[0]);

console.log("max (Math.max):", maxWithMath);
console.log("max (reduce):", maxWithReduce);
