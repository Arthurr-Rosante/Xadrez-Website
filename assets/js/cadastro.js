// função show - hide
const eyeIcon = document.querySelector(".eyeIcon");
const inPassword = document.querySelector("#inSenha");

function showHide() {
    if(eyeIcon.classList.contains("bxs-show")) {
        
        eyeIcon.classList.remove("bxs-show");
        eyeIcon.classList.add("bxs-hide");
        inPassword.type = "text";
    } else {
        eyeIcon.classList.remove("bxs-hide");
        eyeIcon.classList.add("bxs-show");
        inPassword.type = "password";
    }
}

