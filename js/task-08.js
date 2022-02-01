const form = document.querySelector(".login-form");


form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    
    event.preventDefault();
    
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("А ну сейчас же заполнил все поля!)");
  }
    
    const obj = {
        email: email.value,
        password: password.value,
    }

  console.log(obj);
  event.currentTarget.reset();
}