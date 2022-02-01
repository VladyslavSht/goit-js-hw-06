const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener('input', handleInputChange);

function handleInputChange(element) {
    text.style.fontSize = `${element.currentTarget.value}px`;
}