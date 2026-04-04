let str = "Hello World";
let clean = str.toLowerCase().split(" ").join("");
let maxChar = "";
let maxCount = 0;
let freq = {};

for (let i = 0; i < clean.length; i++){
    let char = clean[i];


    if(freq[char]){
        freq[char]++;
    }

    else{
        freq[char] = 1;
    }
}

 
for(let key in freq){
    if(freq[key] > maxCount){
        maxCount = freq[key];
        maxChar = key;
    } 
}

console.log("Most frequent:", maxChar, "→", maxCount, "times");