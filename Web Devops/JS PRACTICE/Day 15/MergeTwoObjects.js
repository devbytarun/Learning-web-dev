let obj1 = { name: "Tarun", age: 19, city: "Ganganagar" };
let obj2 = { age: 20, college: "RIET", city: "Jaipur" };

let merged = { ...obj1, ...obj2 };
console.log(merged)