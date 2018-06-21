function atualizaValor() {
    var total = document.querySelector(".subtotal-1");
    var produtos = document.querySelectorAll(".valorProduto");
    var valor = 0;
    for (var i = 0; i < produtos.length; i++) {
        var temporario = produtos[i].textContent.replace('R$', '').replace(',','.').trim();
        valor += parseFloat(temporario);
    }
    total.textContent = "R$ " + valor.toFixed(2);
    return valor;
}