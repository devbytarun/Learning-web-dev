let person = {
    name: "Tarun",
    age: 19,
    city: "Ganganagar"
};

let keys = [];
let values = [];

for (let key in person){
    keys.push(key);
    values.push(person[key]);
}