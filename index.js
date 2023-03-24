let container = document.getElementsByClassName("container");
let controlPanel = document.querySelector(".controllers");
let div = document.createElement("div");
let divSize = localStorage.getItem("divSize");
let containerSize = localStorage.getItem("containerSize");

controlPanel.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem(
    "containerSize",
    controlPanel.elements["containerSize"].value
  );
  localStorage.setItem(
    "divSize",
    localStorage.getItem("containerSize") /
      controlPanel.elements["pixels"].value
  );

  location.reload();
});

container[0].style["max-width"] = `${containerSize}px`;
container[0].style["max-height"] = `${containerSize}px`;
div.style["width"] = `${divSize}px`;
div.style["height"] = `${divSize}px`;

let calculateDiv = containerSize / divSize;
console.log(divSize);

for (let repeat = 0; repeat < calculateDiv * calculateDiv; repeat++) {
  container[0].appendChild(div.cloneNode());
}

container[0].addEventListener("mouseover", (event) => {
  event.target.style["background-color"] = "black";
});
