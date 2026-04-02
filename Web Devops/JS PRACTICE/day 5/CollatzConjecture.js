let n = 8;
let steps = 0;

while(n > 1){
if(n % 2 == 0){
    n = n / 2;
}
else{
    n = 3 * n + 1;
}
steps++;
console.log(n);
}

console.log("Steps:", steps);