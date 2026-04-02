let n = 153;
let original = n;
let sum = 0;

while(n > 0){
     let digit = n % 10;
    n = Math.floor(n/10);
    sum += digit * digit * digit;
}

if(sum === original){
    console.log("Number IS Armstrong")
}

else{
    console.log("Number IS Not Armstong")
}