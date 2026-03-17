// array methods

//push method (add to end)
let arr = ["monday" , "sunday"];
arr.push("weekdays");
console.log(arr);

// pop\delete (remove from end)
let arr1 = ["monday", "sunday" , "weekdays"]
arr1.pop();
console.log(arr1);

// unshift add to from=nt
let arr2 = ["monday", "sunday" ]
arr2.unshift("weekdays");
console.log(arr2);


//shift 
let arr3 = ["monday", "sunday", "weekdays" ]
arr2.shift();
console.log(arr2);


// index & include
let color = ["blue", "red", "green"];
color.indexOf("blue");
color.includes("blue");

// concatenation & reverse
let primary = ["Tarun","Harkirat","Ansh"];
let secondary = ["bca", "btech", "mba"]
primary.concat(secondary);
primary.reverse();

// slice
let kid = ["Name","Class","Age"]
kid.slice(0,3)

// splice (start,delete count,add item)
let names = ["ansh", "rohit", "dev"]
names.splice(0,0,"harkirat","tarun");

