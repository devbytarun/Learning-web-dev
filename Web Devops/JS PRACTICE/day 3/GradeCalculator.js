let marks = [85, 90, 78, 60, 55];
let sum = 0;
let avg = 0;
let grade;

for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}

avg = sum / marks.length;

if (avg >= 90) {
    grade = "A+";
} else if (avg >= 80) {
    grade = "A";
} else if (avg >= 70) {
    grade = "B";
} else if (avg >= 60) {
    grade = "C";
} else if (avg >= 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Average:", avg, "| Grade:", grade);