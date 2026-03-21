function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

function add(a, b = 0) {
    return a + b;
}

console.log(greet());
console.log(greet("Aman"));
console.log(add(10));
console.log(add(10, 5));
