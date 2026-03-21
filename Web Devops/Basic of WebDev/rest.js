function totalMarks(...marks) {
    return marks.reduce((sum, mark) => sum + mark, 0);
}

const [first, ...others] = [10, 20, 30, 40];

console.log("total marks:", totalMarks(80, 90, 75));
console.log("first:", first);
console.log("others:", others);
