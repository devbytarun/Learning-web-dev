interface User {
    name: string;
    email: string;
}

interface Person extends User {
    phone?: number;
}

const person1: Person = {
    name: "Tarun",
    email: "tarun@gmail.com",
    phone: 9876543210
};

const person2: Person = {
    name: "Rohit",
    email: "rohit@gmail.com"
};

console.log(person1);
console.log(person2);
