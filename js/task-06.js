const input = document.querySelector("#validation-input");
const inputLength = document.querySelector('input[data-length="6"]');


input.addEventListener('blur', handleInputChange);

function handleInputChange(event) {
    if (event.currentTarget.value.length < Number(inputLength.dataset.length)) {
        input.classList.add('valid');
    }
    else input.classList.add('invalid');
}