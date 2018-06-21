atualizaValor();
numeroParcelas(atualizaValor());
atualizaQuantidades();
AtualizaTotal();
atualizaFrete();
AtualizaFretePorProduto(atualizaFrete());
var addsacola = document.querySelectorAll('.botao-addsacola');
addsacola.forEach(element => {
    element.addEventListener('click', function () {
        criaElementoSacola(element, element.parentElement.parentElement);
        AtualizaTotal();
    });
});

var lixeiras = document.querySelectorAll("#imagemDel");
lixeiras.forEach(element => {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        criaElementoDeletado(element);
        atualizaValor();
        AtualizaTotal();
        numeroParcelas(atualizaValor());
        atualizaFrete();
    })
})

function atualizaFrete() {
    var valor = 0;
    var tabelaProdutos = document.querySelector('.tabela-produtos');
    var totalProdutosAdicionados = tabelaProdutos.querySelectorAll('td');
    var tamanho = totalProdutosAdicionados.length;
    if (tamanho == 1) valor = 15.00;
    if (tamanho == 2) valor = 27.25;
    if (tamanho == 3) valor = 32.30;
    if (tamanho == 4) valor = 40.00;
    var form = document.querySelector('#formaEntrega');
    form.textContent = "Normal - R$ " + valor.toFixed(2);
    AtualizaTotalFrete(valor);
    return valor.toFixed(2);
}
var total = document.querySelector('.freteTotal');
var diasEntrega = document.querySelector('.aparecerNaTela-2');
var enderecoCep = document.querySelector('.enderecoCep');
function AtualizaFretePorProduto(frete) {
    var cep = document.querySelector('.botao-ok');
    cep.addEventListener('click', function (event) {
        event.preventDefault();
        var inputfrete = document.querySelector('.input-frete');
        var enderecoRua = document.querySelector('.enderecoRua');
        var enderecoBairro = document.querySelector('.enderecoBairro');
        var enderecoCidade = document.querySelector('.enderecoCidade');
        var form = document.querySelector('#formaEntrega');
        var subtotal = document.querySelector('.subtotal-5');
        var cep = document.querySelector('.cep');
        if (inputfrete.value.match(/^[0-9]{8}/)) {
            var inicio = inputfrete.value.substring(0, 5);
            var fim = inputfrete.value.substring(5, inputfrete.value.length);
            var cepfinal = inicio + '-' + fim;
            total.classList.add('desaparece');
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    resposta = JSON.parse(xhttp.responseText);
                    enderecoCep.classList.remove('desaparece');
                    enderecoRua.textContent = "Rua: " + resposta.logradouro;
                    enderecoBairro.textContent = "Bairro: " + resposta.bairro;
                    enderecoCidade.textContent = "Cidade: " + resposta.cidade;
                    form.textContent = "Normal - R$ " + frete;
                    subtotal.textContent = "3 a 7 dias utéis";
                    cep.textContent = cepfinal;
                    diasEntrega.classList.remove('desaparece');
                    diasEntrega.classList.add('aparece');
                } else {
                    diasEntrega.classList.remove('desaparece');
                    enderecoCep.classList.remove('desaparece');
                    enderecoRua.textContent = "Rua: " + "Inválido";
                    enderecoBairro.textContent = "Bairro: " + "Inválido";
                    enderecoCidade.textContent = "Cidade: " + "Inválido";
                    subtotal.textContent = "";
                    form.textContent = "";
                    diasEntrega.classList.add('aparece');
                    cep.textContent = "Cep Inválido";
                }
            };
            xhttp.open("GET", "https://api.postmon.com.br/v1/cep/" + cepfinal, true);
            xhttp.send();
        }
    })
}

var editarCep = document.querySelector('#editar');
editarCep.addEventListener('click', function (event) {
    event.preventDefault();
    total.classList.remove('desaparece');
    diasEntrega.classList.add('desaparece');
    enderecoCep.classList.add('desaparece');
    enderecoCep.classList.remove('aparece');
    diasEntrega.classList.remove('aparece');
})

var finalizarCompra = document.querySelector('.botao-finalizarCompra');
finalizarCompra.addEventListener('click', function () {
    var a = document.createElement('a');
    a.href = "./teste.html";
    finalizarCompra.parentElement.appendChild(a);
})
