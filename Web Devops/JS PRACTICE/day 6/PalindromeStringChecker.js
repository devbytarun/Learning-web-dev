let str = "Meow Meow";
let str1 = "";
let rev = "";
let clean = str.toLowerCase().split(" ").join("");

for (let i = clean.length - 1; i >= 0; i--) {
  str1 = clean[i];
  rev = rev + str1;
}

if (clean === rev) {
  console.log("Number Is Palindrome");
} else {
  console.log("Not Palindrome");
}
