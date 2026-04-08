let arr  = [1, 2, 3, 4, 5, 6, 7, 8];
let Odd = 0;
let even = 0;

for(let i = 0 ; i < arr.length; i++){
    if (arr[i] % 2 === 0){
       even++;
    }
    else{
        Odd++;
    }
}
console.log("Odd :", Odd, "Even :", even)