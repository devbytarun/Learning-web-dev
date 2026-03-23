const title = document.getElementById("title");
const button = document.getElementById("changeTextBtn");
const status = document.getElementById("status");

button.addEventListener("click", () => {
    title.textContent = "DOM Event Triggered";
    status.textContent = "Button click event executed.";
});
