const buttons = document.querySelectorAll(".itemBtn");
const selected = document.getElementById("selected");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        selected.textContent = `${btn.textContent} clicked`;
    });
});
