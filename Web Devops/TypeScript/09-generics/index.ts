function printItem<T>(item: T):T {
return(item);
}

console.log(printItem(42));        // number
console.log(printItem("Tarun"));   // string
console.log(printItem(true));      

function getFirst<T>(arr: T[]):T{
    return arr[0];
}

console.log(getFirst([1, 2, 3]));
console.log(getFirst(["a", "b", "c"]));   