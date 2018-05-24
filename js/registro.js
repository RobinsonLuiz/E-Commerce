var botao = document.querySelector("#finaliza");
var validar = new ValidarCampos();
var boleano = false;
botao.addEventListener('click', function(event) {
    validar.validaCampos();
    boleano = validar.nenhumErro();
    if (!boleano) event.preventDefault();
})

