let arr = [3, 7, 1, 9, 4, 6];
let min = arr[0];
let max = arr[0];

for(let i = 0; i < arr.length; i++){
    
if(arr[i] < min){
     min = arr[i];
}

else if(arr[i] > max){
    max = arr[i];
}
}

