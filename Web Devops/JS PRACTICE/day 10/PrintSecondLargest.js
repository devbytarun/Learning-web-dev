let arr = [3, 7, 1, 9, 4, 6];
let max = arr[0];
let secondmax = arr[0];

for(let i = 0; i < arr.length; i++){

    if(arr[i]>max){
        secondmax = max;
        max = arr[i];
    }

    else if(arr[i]>secondmax){
 secondmax = arr[i];
    }
}

console.log(secondmax);