let people = [
    { name: "Tarun", city: "Ganganagar" },
    { name: "Rahul", city: "Jaipur" },
    { name: "Priya", city: "Ganganagar" },
    { name: "Amit", city: "Jaipur" },
    { name: "Sara", city: "Delhi" }
];

let result = {};

for(let i = 0; i < people.length; i++){
    let city = people[i].city;
    let name = people[i].name;

    if(!result[city]){
        result[city] = [];
    }
    result[city].push(name);
}

console.log(result);