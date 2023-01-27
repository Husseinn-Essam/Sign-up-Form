let pass = document.getElementById("pass");
let confPass = document.getElementById("conf-pass");
function validatePass() {
    if (pass.value != confPass.value) {
        confPass.setCustomValidity("Passwords Don't Match");
        confPass.style.backgroundColor = "crimson";
    } else {
        confPass.setCustomValidity('');
        confPass.style.backgroundColor = "green";
    }

}
