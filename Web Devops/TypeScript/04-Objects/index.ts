let user: { name: string; age: number, ispass:boolean } = {
    name: "Tarun",
    age: 19,
    ispass:true
};

console.log(user);

type product = {
    title: string;
    price: number;
    inStock: boolean;
}

let product1: product = { title: "laptop", price: 190000, inStock: true };
let product2: product = { title: "Charger", price: 1200, inStock: false };

console.log(product1);
console.log(product2);