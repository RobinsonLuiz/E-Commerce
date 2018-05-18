var botao = document.querySelector("#finaliza");
var validate = new ValidarCampos();
var boleano = false;
botao.addEventListener('click', function(event) {
    validate.validaCampos();
    boleano = validate.nenhumErro();
    if (!boleano) event.preventDefault();
})
