function AtualizaTotal() {
    var frete = document.querySelector('#formaEntrega');
    var atualizartotal = document.querySelector('.total-1');
    var valorFrete = parseFloat(frete.textContent.trim().replace('Normal - ','').replace('R$ ','').replace(',','.'));
    var total = document.querySelector('.subtotal-1');
    var valorTotal = parseFloat(total.textContent.replace("R$",'').replace(',','.').trim());
    var totalApagar = parseFloat(valorFrete + valorTotal).toFixed(2);
    atualizartotal.textContent = "R$ " + totalApagar;
    var numeroVezes = document.querySelector(".total-2");
    var quantidadeParcelas = document.querySelectorAll('#numerodevezes-total');
    quantidadeParcelas.forEach(element => {
        element.addEventListener('change', function() {
            var quantos = parseInt(element.value.replace('x',''));
            numeroVezes.textContent = quantos + "x de R$ " + (totalApagar / quantos).toFixed(2);
        })
    })
    numeroVezes.textContent = "1x de R$ " + (totalApagar);

}

function AtualizaTotalFrete(valor) {
    var total = document.querySelector('.subtotal-1');
    var valorTotal = parseFloat(total.textContent.replace("R$",'').replace(',','.').trim());
    var atualizartotal = document.querySelector('.total-1');
    var totalApagar = parseFloat(valor + valorTotal).toFixed(2);
    atualizartotal.textContent = "R$ " + totalApagar;
}