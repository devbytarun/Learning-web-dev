let str = "I love JavaScript programming";
let words = str.split(" ");
let maxcount = 0;
let maxWord = "";


for(let i = 0; i < words.length; i++){
    if(words[i].length > maxcount){
        maxcount = words[i].length;
        maxWord = words[i];
    }
}

console.log(maxWord, maxcount);
