function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', handleChangeColorBtn);

function handleChangeColorBtn() {

  const currentColor = getRandomHexColor()
  document.body.style.backgroundColor = currentColor;
  color.textContent = currentColor;

}