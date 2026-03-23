const dataForm = document.getElementById("dataForm");
const result = document.getElementById("result");

dataForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(dataForm);
    const name = formData.get("name");
    const email = formData.get("email");

    result.textContent = `Name: ${name}\nEmail: ${email}`;
});
