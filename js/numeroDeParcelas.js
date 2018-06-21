function numeroParcelas(valorAtualizado) {
    var parcelado = document.querySelector(".subtotal-2");
    var numerodevezes = document.querySelector("#numerodevezes");
    var opcoes = numerodevezes.querySelectorAll("option");
    var parcelas;
    parcelado.textContent = "1x de R$ " + (valorAtualizado).toFixed(2);
    numerodevezes.addEventListener('change', function () {
        for (var i = 0; i < opcoes.length; i++) {
            if (opcoes[i].selected == true) {
                parcelas = parseFloat(opcoes[i].textContent.replace('x', '').trim());
                parcelado.textContent = opcoes[i].textContent + " de R$ " + (valorAtualizado / parcelas).toFixed(2);
            }
        }
    })
}