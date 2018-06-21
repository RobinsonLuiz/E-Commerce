function atualizaQuantidades() {
    var quantidades = document.querySelectorAll("#inputCompra");
    quantidades.forEach(quantidade => {
        var valorProduto = quantidade.parentElement.querySelector('.valorProduto');
        var valor = parseFloat(valorProduto.textContent.replace('R$', '').replace(',','.').trim());
        quantidade.addEventListener('change', function () {
            valorProduto.textContent = "R$ " + (quantidade.value * valor).toFixed(2);
            atualizaValor();
            numeroParcelas(atualizaValor());
            AtualizaTotal();
        })
    })
}