javascript
let n = 50;

for(let i = 1; i <= n; i++){
if(i % 3 == 0 && i % 5 == 0){
console.log("FizzBUzz");
}
else if ( i % 3 == 0){
    console.log("Fizz");
}
else if( i % 5 == 0){
    console.log("Buzz");
}

else{
    console.log(i);
}
}
