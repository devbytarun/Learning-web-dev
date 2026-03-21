const max = prompt("Enter Your Number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter Your Number");

while (true) {
  if (guess == "quit") {
    console.log("user quit!!");
    break;
  }

  if (guess == random) {
    console.log("You Win Yayyyy");
    break;
  } else {
    guess = prompt("OPPS WRONG NUMBER!! TRY AGAIN");
  }
}
