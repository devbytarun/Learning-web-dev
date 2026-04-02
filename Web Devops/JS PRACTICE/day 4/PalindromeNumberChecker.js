let n = 121;
let original = n;
let result = 0;

   while(n > 0){
    let digit = n % 10;
    n = Math.floor(n/10);
    result = result * 10 + digit;
}

if(original === result){
console.log("Number IS Palidrom")
}

else{
    console.log("Number is Not Palidrom")
}