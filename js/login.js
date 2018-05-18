const validate = new ValidarCampos();
const botao2 = document.querySelector("#esqueceu-senha");
botao2.addEventListener('click', function(event) {
    validate.validaEmail();
    let valida = document.querySelector('#email');
    let erros = document.querySelector(".erros");
    if (!valida.value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
        valida.classList.remove('correto');
        valida.classList.add('errado');
        valida.focus();
        var div = document.createElement("div");
        div.classList.add("alert");
        div.classList.add("alert-danger");
        div.textContent = "Por favor insira um e-mail válido";
        erros.append(div);
        boleano = false;
    } else {
        erros.textContent = "";
        boleano = true;
        valida.classList.add('correto');
        valida.classList.remove('errado');
    }
    if (!boleano) event.preventDefault();
})
