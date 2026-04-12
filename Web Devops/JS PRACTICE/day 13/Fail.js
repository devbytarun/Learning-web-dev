let students = [
    { name: "Tarun", marks: 85 },
    { name: "Rahul", marks: 45 },
    { name: "Priya", marks: 90 },
    { name: "Amit", marks: 30 },
    { name: "Sara", marks: 72 }
];
let pass = 0;
let fail = 0;

for(let i = 0; i < students.length; i++){
    if(students[i].marks >= 50){
        pass++;
    } else {
        fail++;
    }
}

console.log("Pass :", pass, "Fail :", fail)