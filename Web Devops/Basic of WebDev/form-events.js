const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const formMessage = document.getElementById("formMessage");

username.addEventListener("focus", () => {
    formMessage.textContent = "Input focused";
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = `Form submitted by ${username.value}`;
});
