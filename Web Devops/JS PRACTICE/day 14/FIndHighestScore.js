let students = [
    { name: "Tarun", marks: 85 },
    { name: "Rahul", marks: 92 },
    { name: "Priya", marks: 78 },
    { name: "Amit", marks: 95 },
    { name: "Sara", marks: 88 }
];

let highest = 0;
let result = {};

for(let i = 0; i < students.length;i++){
    let marks = students[i].marks;


    if(marks > highest){
      highest = marks; 
    result = students[i];
    }

}

console.log("Highest Scorer:", result.name, "with", result.marks, "marks");