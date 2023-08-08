const subscribeButton = document.getElementById("subscribe-button");
const dismissButton = document.getElementById("dismiss-button");
const confirmationMessage = document.getElementById("confirmation-message");
const typedEmail = document.getElementById("typed-email");

function displaySuccessMessage() {
    document.querySelector(".success-message").style.display = "flex";
}

function validation() {
    let form = document.getElementById("form");
    let input = document.getElementById("input").value;
    let text = document.getElementById("text");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (input.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";

        typedEmail.textContent = input;
        subscribeButton.addEventListener("click", displaySuccessMessage);
    } 
    
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Valid email required";
        text.style.color = "#ff0000";

        subscribeButton.removeEventListener("click", displaySuccessMessage);
    }
}

dismissButton.addEventListener("click", function () {
    location.reload();
});