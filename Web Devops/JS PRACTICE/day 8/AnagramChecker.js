let str1 = "listen";
let str2 = "silent";

let sorted1 = str1.split("").sort().join("");
let sorted2 = str2.split("").sort().join("");

if(sorted1 === sorted2){
    console.log("Word is Anagram");
}

else{
    console.log("Not Anagram");
}