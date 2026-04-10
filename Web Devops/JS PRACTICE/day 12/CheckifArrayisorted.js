let arr = [1,2,3,5,4,6,7];

let sorted = true;

for(let i = 1; i < arr.length; i++){
    if(arr[i] < arr[i-1]){
        sorted = false;
        break;
    }
}

sorted ? console.log("Sorted") : console.log("Not Sorted");