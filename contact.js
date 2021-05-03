const form = document.querySelector("form");
const nameInput = document.querySelector("input[name='username']");
const emailInput = document.querySelector("input[name='email']");
const subjectInput = document.querySelector("input[name='subject']");
const messageInput = document.querySelector("textarea[name='message']");
const submitMessage = document.querySelector(".submit-message");

// isFormValid to show submit message
// validation works, it removes the form, shows submit message but problem is that the mail isn't sent
// let isFormValid = false;

// isValidationOn to stop fields getting red by start of typing in the other fields, problem is that validation stops working and the mail isn't sent
// let isValidationOn = false;

form.addEventListener("submit", (e) => {
    checkInputs(e);
    // isValidationOn = true;
    // if (isFormValid) {
    //     form.remove();
    //     submitMessage.style.display = "block";
    // }
});
    
//This is important when we type again it checks input right by typing and we don't have to wait for submit. Works well with function removeError
const inputs = [nameInput, emailInput, subjectInput, messageInput];
inputs.forEach(input => {
    input.addEventListener("input", (e) => {
        checkInputs(e);
    });
});

const checkInputs = (e) => {
    // if (!isValidationOn) return;
    // isFormValid = true;
    inputs.forEach(removeError);
    if(!nameInput.value) {
        showError(nameInput, "Field cannot be empty!", e);
    } else {
        showSuccess(nameInput);
    }
    if(!emailInput.value) {
        showError(emailInput, "Field cannot be empty!", e);
    } else {
        showSuccess(emailInput);
    }
    if(!isValidEmail(emailInput.value)) {
        showError(emailInput, "Invalid email!", e);
    } else {
        showSuccess(emailInput);
    }
    if(!subjectInput.value) {
        showError(subjectInput, "Field cannot be empty!", e);
    } else {
        showSuccess(subjectInput);
    }
    if(!messageInput.value) {
        showError(messageInput, "Field cannot be empty!", e);
    } else {
        showSuccess(messageInput);
    }
}

const showError = (input, message, e) => {
    e.preventDefault();
    const formControl = input.parentElement;
    const errorMsg = formControl.querySelector("p");
    formControl.classList.add("error");
    errorMsg.innerText = message;
    // isFormValid = false;
}

//When we type again, error class is removed
const removeError = (input) => {
    const formControl = input.parentElement;
    formControl.classList.remove("error");
}

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.classList.add("success");
}

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };