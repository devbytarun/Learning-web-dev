let arr = [1, 20, 3, 4];

const square = (arr) => {
  return arr.map((x) => x * x);
};

let square1 = square(arr);

let sum = square1.reduce((a, b) => a + b);

let average = sum / square1.length;

console.log(average);

let arr1 = [1, 3, 4, 5, 6];
const value = arr1.map((num) => num + 5);

let names = ["tarun", "harki", "ansh"];
console.log(names.map((name) => name.toUpperCase));

constmergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });

constdoubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];
doubleAndReturnArgs([1, 2, 3], 4, 4);
