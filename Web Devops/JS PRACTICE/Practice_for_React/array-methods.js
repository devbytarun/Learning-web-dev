const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const prices = [100, 200, 300, 400, 500];
const gst = prices.map(n => n + (n * 18 / 100));
console.log(gst);

const students = [
  { name: "Tarun", marks: 80 },
  { name: "Rahul", marks: 65 },
  { name: "Rohit", marks: 90 }
];

const result = students.map((student) => {
    let grade;
    if(student.marks >= 80) grade = "A";
    else if(student.marks >= 65) grade = "B";
    else grade = "C";

    return { name: student.name, grade: grade };
});

console.log(result);