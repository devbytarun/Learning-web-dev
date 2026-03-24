const startBtn = document.querySelector("#start-btn");
const gameArea = document.querySelector("#game-area");
const target = document.querySelector("#target");
const scoreText = document.querySelector("#score");
const timeText = document.querySelector("#time");
const statusMessage = document.querySelector("#status-message");

let score = 0;
let timeLeft = 20;
let timerId = null;
let isRunning = false;

function updateScore() {
  scoreText.innerText = score;
}

function updateTime() {
  timeText.innerText = timeLeft;
}

function moveTarget() {
  const areaRect = gameArea.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  const maxX = areaRect.width - targetRect.width;
  const maxY = areaRect.height - targetRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
}

function endGame() {
  clearInterval(timerId);
  timerId = null;
  isRunning = false;
  target.style.display = "none";
  startBtn.innerText = "Play Again";
  statusMessage.innerText = `Time up! Final score: ${score}`;
}

function startGame() {
  score = 0;
  timeLeft = 20;
  isRunning = true;

  updateScore();
  updateTime();

  target.style.display = "block";
  moveTarget();

  statusMessage.innerText = "Game running... click the target!";
  startBtn.innerText = "Restart";

  clearInterval(timerId);
  timerId = setInterval(() => {
    timeLeft -= 1;
    updateTime();

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

startBtn.addEventListener("click", startGame);

target.addEventListener("click", () => {
  if (!isRunning) return;
  score += 1;
  updateScore();
  moveTarget();
});
