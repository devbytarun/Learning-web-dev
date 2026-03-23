const helloBtn = document.getElementById("helloBtn");
const output = document.getElementById("output");

function showMessage() {
    output.textContent = "Hello! Event listener worked.";
}

helloBtn.addEventListener("click", showMessage);
