//modo escuro e claro
const html = document.querySelector("html");
const b_check = document.getElementById('inCheck');
    b_check.addEventListener('change', () => {
        html.classList.toggle('dark');
    }) 