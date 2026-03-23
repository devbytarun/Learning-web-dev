const thisBtn = document.getElementById("thisBtn");

thisBtn.addEventListener("click", function () {
    console.log("this refers to:", this);
    this.textContent = "Clicked";
    this.style.backgroundColor = "#93c5fd";
});
