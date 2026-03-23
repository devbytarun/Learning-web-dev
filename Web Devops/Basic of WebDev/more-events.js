const moreInput = document.getElementById("moreInput");
const citySelect = document.getElementById("citySelect");
const moreOutput = document.getElementById("moreOutput");

moreInput.addEventListener("focus", () => {
    moreOutput.textContent = "Input focused";
});

moreInput.addEventListener("blur", () => {
    moreOutput.textContent = "Input blurred";
});

citySelect.addEventListener("change", () => {
    moreOutput.textContent = `Selected city: ${citySelect.value}`;
});
