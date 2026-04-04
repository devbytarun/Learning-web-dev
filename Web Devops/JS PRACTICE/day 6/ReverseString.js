let str = "Tarun";
let str1 = "";
let rev = "";


for(let i = str.length - 1; i >= 0; i--){
str1 = str[i];
rev = rev + str1;
}

console.log(rev);