const text = document.getElementById("text");
const list = document.querySelector("ul");
const enter = document.getElementById("enter");

enter.addEventListener("click", function () {
    let tasktext = text.value;

    if (tasktext === "") return;

    let li = document.createElement("li");
    li.innerText = tasktext;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    li.appendChild(delBtn);
    list.appendChild(li);

    text.value = "";
});

 list.addEventListener("click", function(event){
if(event.target.nodeName == "BUTTON"){
let listitem = event.target.parentElement;
listitem.remove();
}});