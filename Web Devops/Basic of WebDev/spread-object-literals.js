const user = { name: "Riya", role: "Student" };
const updatedUser = { ...user, role: "Developer", city: "Kolkata" };

console.log("old object:", user);
console.log("new object:", updatedUser);
