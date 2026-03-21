const student = {
    name: "Arjun",
    age: 21,
    course: "JavaScript"
};

const { name, age, course } = student;
const { city = "Not Provided" } = student;

console.log("name:", name);
console.log("age:", age);
console.log("course:", course);
console.log("city:", city);
