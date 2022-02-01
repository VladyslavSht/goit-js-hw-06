function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

let totalBoxes = [];

function createBoxes() {
  const amount = input.value;
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    console.log(box);
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    totalBoxes.push(box);
    width += 10;
    height += 10;
  }
    
  boxes.append(...totalBoxes);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  totalBoxes = [];
}


