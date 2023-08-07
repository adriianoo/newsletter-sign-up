function validation() {
    let form = document.getElementById("form");
    let input = document.getElementById("input").value;
    let alert = document.getElementById("text");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (input.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Valid email required";
        text.style.color = "#ff0000";
    }
}