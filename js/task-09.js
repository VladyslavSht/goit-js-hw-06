function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', handleChangeColorBtn);

function handleChangeColorBtn() {

  
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();

}