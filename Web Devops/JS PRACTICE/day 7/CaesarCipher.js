let str = "hello";
let k = 3;
let result = "";

for(let i = 0; i < str.length; i++){
      let char = str[i];
    let code = char.charCodeAt(0);  
    let shifted = code + k;   
    result = result + String.fromCharCode(shifted);
}

console.log(result);