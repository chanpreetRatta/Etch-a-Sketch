let container = document.getElementsByClassName("container")[0];
let div = document.createElement("div");
div.classList = "innerDIV";

let scroll = document.querySelector(".controllers")[0].value;
console.log(scroll);

for (let divElement = 0; divElement <= 960; divElement++) {
  container.appendChild(div.cloneNode());
}

container.childNodes.forEach((element) =>
  element.addEventListener("mouseover", (event) => {
    event.target.style = "background-color: black";
  })
);
