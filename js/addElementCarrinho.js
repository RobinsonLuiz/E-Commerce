function criaElementoSacola(element, card) {
    var tabelas = document.querySelector('.tabela-produtos').querySelector('tbody');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var card = card;
    var img = card.querySelector('img');
    img.id = "logos";
    var carddeck = card.querySelector('.card-deck');
    var spanProduto = document.createElement('span');
    spanProduto.className = "orgProduto";
    var span1 = document.createElement('span');
    span1.className = 'perfumes';
    span1.textContent = carddeck.querySelector('h4').textContent;
    var span2 = document.createElement('span');
    span2.className = 'infos';
    spanProduto.appendChild(span1);
    spanProduto.appendChild(span2);
    span2.textContent = 'produto muito bom...';
    var span3 = document.createElement('span');
    span3.className = 'valorProduto';
    span3.textContent = carddeck.querySelector('p').querySelector('span').textContent.replace('Por : ', '').trim();
    var deletar = document.createElement('img');
    deletar.id = 'correcaoAltura';
    deletar.src = '../../imagens/lixeira.png';
    deletar.width = '40';
    deletar.height = '40';
    deletar.addEventListener('click', function (event) {
        event.preventDefault();
        criaElementoDeletado(deletar);
        atualizaValor();
        numeroParcelas(atualizaValor());
        AtualizaTotal();
        atualizaFrete();
    })
    var input = document.createElement('input');
    input.id = 'inputCompra';
    input.type = 'number';
    input.defaultValue = 1;
    input.name = 'quantidade';
    input.min = '1';
    input.max = '10';
    var valorPadrao = parseFloat(span3.textContent.replace('R$', '').trim()).toFixed(2);
    input.addEventListener('change', function () {
        var valor = (valorPadrao * input.value).toFixed(2);
        span3.textContent = "R$ " + valor;
        atualizaValor();
        numeroParcelas(atualizaValor());
        AtualizaTotal();
    })
    var span4 = document.createElement('span');
    span4.id = 'imagemDel';
    span4.appendChild(deletar);
    td.appendChild(img);
    td.appendChild(spanProduto);
    td.appendChild(input);
    td.appendChild(span3);
    td.appendChild(span4);
    tr.appendChild(td);
    tabelas.appendChild(tr);
    atualizaValor();
    numeroParcelas(atualizaValor());
    atualizaFrete();
    card.remove(this);
}