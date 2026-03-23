const input = document.getElementById("activityInput");
const log = document.getElementById("activityLog");

input.addEventListener("input", () => {
    log.textContent = `Typing activity: ${input.value}`;
});

document.addEventListener("click", () => {
    console.log("User clicked somewhere on the page.");
});
