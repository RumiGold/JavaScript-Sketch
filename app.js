const DEFAULT_GRID = 16;
const DEFAULT_COLOR = "#000";
const WIDTH = 360;
const HEIGHT = 360;

const gameGrid = document.getElementById("gameGrid");
const range = document.getElementById("range");
const gridSpan = document.getElementById("gridSpan");
const colorInput = document.getElementById("colorInput");
const clearBtn = document.getElementById("clearBtn");

let newSize;
let newColor;
let divs;

function setCurrentSize(size) {
  newSize = size;
}

function setCurrentColor(color) {
  newColor = color;
}

colorInput.addEventListener("change", () => {
  setCurrentColor(colorInput.value);
});

range.addEventListener("change", () => {
  gridSpan.innerHTML = `${range.value} x ${range.value}`;
  setCurrentSize(range.value);
  filDiv();
  getDivs();
});

function filDiv() {
  gameGrid.innerHTML = "";
  let currentSize = newSize ? newSize : DEFAULT_GRID;
  let size = WIDTH / currentSize;

  for (let i = 0; i < Math.pow(currentSize, 2); i++) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.setAttribute("class", "gameDIVS");
    gameGrid.appendChild(newDiv);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  filDiv();
  getDivs();
});

function getDivs() {
  divs = document.querySelectorAll(".gameDIVS");
  divs.forEach((d) => {
    d.addEventListener("mouseover", () => {
      let currentColor = newColor ? newColor : DEFAULT_COLOR;
      d.style.background = currentColor;
    });
  });
}

clearBtn.addEventListener("click", () => {
  divs = document.querySelectorAll(".gameDIVS");
  divs.forEach((d) => {
    d.style.background = "#fff";
  });
});
