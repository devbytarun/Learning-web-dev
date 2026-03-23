const box = document.getElementById("box");
const position = document.getElementById("position");

box.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#d9f99d";
});

box.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "";
    position.textContent = "X: 0, Y: 0";
});

box.addEventListener("mousemove", (event) => {
    position.textContent = `X: ${event.offsetX}, Y: ${event.offsetY}`;
});
