
const frm = document.querySelector("form");
const btnLogin = document.querySelector(".botaoEntrar");
const username = document.querySelector(""); //atribuir a tag correta no futuro


frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const nomeUser = frm.inUser.value;
    //***.innerHTML=`User: ${nomeUser}`
    
})

// Função para fazer o form Aparecer

function showHide() {

    if (frm.style.display === 'block') {
        frm.style.display = 'none';
    } else {
        frm.style.display = 'block';
    }

}