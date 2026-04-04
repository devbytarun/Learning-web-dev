let str = "Hello World"
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;


for(let i = 0; i < str.length; i++){
if(vowels.includes(str[i].toLowerCase())){
    count++;
}
}
console.log(count)