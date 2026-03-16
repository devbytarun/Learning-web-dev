let num = 2;
if (num % 10 == 0) {
    console.log("good");
}
else {
    console.log("bad");
}

let name = prompt("Enter name");
let age = prompt("Enter age");
alert(name + " is " + age + " years old.");

let quarter = prompt("Enter quarter (1-4)");
switch (quarter) {
    case "1":
        console.log("January, February, March");
        break;  
    case "2":
        console.log("April, May, June");
        break;  

    case "3":
    console.log("July, August, September");
    break;

    case "4":
    console.log("October, November, December");
    break;  
    default:
        console.log("Invalid quarter");
        break;
}

let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter third number");
if (a > b && a > c) {
    console.log(a + " is the largest number");
} else if (b > a && b > c) {
    console.log(b + " is the largest number");
} else {
    console.log(c + " is the largest number");
}

let a1 = prompt("Enter first number");
let b1 = prompt("Enter second number");
let c1 = a1 % 10;
let d1 = b1 % 10;

if (c1 == d1) {
    console.log("The last digits are the same");
}
else {    console.log("The last digits are different");
}