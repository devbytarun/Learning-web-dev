let n = 12345;
let result = 0;


while(n > 0){
    let digit = n % 10;
    n = Math.floor(n/10);
    result = result + digit;
}

console.log(result);