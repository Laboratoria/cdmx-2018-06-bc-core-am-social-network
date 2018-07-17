const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("inputText");
const input = document.getElementById("item");

let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[];

localStorage.setItem("items", JSON.stringify("userPublications"));
const data = JSON.parse(localStorage.getItem("items"));
const liMaker = (text) =>{
    const li = document.createElement("li");
    li.textContent = text ;
    ul.appendChild(li);
}
form.addEventListener("submit", function (h){
h.preventDefault();
itemsArray.push(input.value);
localStorage.setItem("items", JSON.stringify(itemsArray));
liMaker(input.value);
input.value = "";
});
data.forEach(item => {
liMaker(item);
});
inputText.addEventListener("click", function(){
    localStorage.clear();
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
});

