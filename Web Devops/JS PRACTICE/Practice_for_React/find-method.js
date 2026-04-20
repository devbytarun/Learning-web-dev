const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Phone", price: 15000 },
  { id: 3, name: "Tablet", price: 25000 }
];

const phone = products.find(p => p.id == 2);
console.log(phone);


const students = [
  { name: "Tarun", marks: 80 },
  { name: "Rahul", marks: 45 },
  { name: "Rohit", marks: 90 },
  { name: "Amit", marks: 35 }
];

// Pass students ke naam nikalo
const passedNames = students
  .filter(s => s.marks >= 60)
  .map(s => s.name);

console.log(passedNames); 