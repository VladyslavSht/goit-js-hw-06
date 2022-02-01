let counterValue = 0;

const refs = {
    btnDecrement: document.querySelector("[data-action='decrement']"),
    btnIncrement: document.querySelector("[data-action='increment']"),
    value: document.querySelector('#value'),
};

refs.btnDecrement.addEventListener('click', handleDecreaseTotal);
refs.btnIncrement.addEventListener('click', handleIncreaseTotal);

function handleIncreaseTotal() {
    counterValue += 1;
    refs.value.textContent = counterValue;

};

function handleDecreaseTotal() {
    counterValue -= 1;
    refs.value.textContent = counterValue;

};