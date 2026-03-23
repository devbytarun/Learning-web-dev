const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");

keyInput.addEventListener("keydown", (event) => {
    keyOutput.textContent = `keydown: ${event.key}`;
});

keyInput.addEventListener("keyup", (event) => {
    console.log(`keyup: ${event.key}`);
});
