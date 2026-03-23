const Mouseout = document.getElementById("Mouseout");

Mouseout.addEventListener("mouseout", (event) => {
  event.target.style.color = "orange";});

Mouseout.addEventListener("click", (event) => {
  event.target.style.color = "red";
});


/*inp.addEventListener("input", function (){
  console.log(inp.value);
  heading.innerText = inp.value;
});*/



const input = document.getElementById("text");

const heading = document.querySelector("h2");
 input.addEventListener("input", (event) => {


  // remove invalid characters
  let cleanValue = input.value.replace(/[^a-zA-Z ]/g, "");


  // update input (so user also sees filtered text)   
  input.value = cleanValue;

  // show in heading
  heading.textContent = cleanValue;


});