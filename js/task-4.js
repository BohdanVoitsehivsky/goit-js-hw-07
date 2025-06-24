const sendForm = document.querySelector(".login-form");

sendForm.addEventListener("submit", callback);
function callback(event)  {
    event.preventDefault();
const userEmail = event.target.email.value.trim();
const userPassword = event.target.password.value.trim();
if(userEmail === '' || userPassword === '') {
    alert(`All form fields must be filled in`);
    return;
}
const formData = {
    email: userEmail,
    password: userPassword
}

console.log(formData);


event.target.reset();
}