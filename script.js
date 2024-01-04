const formEl = document.getElementById("form");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm-password");
const msgContainerEl = document.querySelector(".msg-container");

let isValid = false;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  //Validate Form
  isValid = form.checkValidity();
  if (isValid && passwordEl.value === confirmPasswordEl.value) {
    msgContainerEl.textContent = "Successfully Registered";
    msgContainerEl.style.color = "green";
    msgContainerEl.style.borderColor = "green";
    const formData = {
      name: e.target[0].value,
      phoneNumber: e.target[1].value,
      email: e.target[2].value,
      website: e.target[3].value,
      password: e.target[4].value,
      confirmPassword: e.target[5].value,
    };
    formEl.reset();
    console.log(formData);
  }
  if (isValid && passwordEl.value !== confirmPasswordEl.value) {
    msgContainerEl.textContent = "Enter the same Password";
    msgContainerEl.style.color = "red";
    msgContainerEl.style.borderColor = "red";
    passwordEl.style.borderColor = "rgba(166, 0, 0, 0.51)";
    confirmPasswordEl.style.borderColor = "rgba(166, 0, 0, 0.51)";
  }
});
