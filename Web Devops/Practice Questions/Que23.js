Math.floor(Math.random() * 6) + 1;

const car = {
    Name: "Bmw",
    Color: "Black",
    model: "7xrs"
}

const person = {
    Name: "tarun",
    age: 19,
    city: "San Fransicso"
}

person.city = "New York";
person.country = "United States";
console.log(person);



let arr = [5, 3, 2, 3, 5, 7, 8, 9];
let num = 5;

function high(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}


let str = "abcdsecseafj"

function unique(str) {
    let result = "";
    for (let i = 0; i > str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

