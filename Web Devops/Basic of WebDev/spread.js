const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];

console.log("original:", nums);
console.log("spread copy + add:", newNums);
console.log("max using spread:", Math.max(...newNums));
