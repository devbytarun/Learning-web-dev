let str = "the cat sat on the mat the cat";
let arr = str.split(" ");
let result = {};

for(let i = 0; i < arr.length; i++){
    let word = arr[i];

    if(result[word]){
        result[word]++;   
    } else {
        result[word] = 1;  
    }
}

console.log(result)