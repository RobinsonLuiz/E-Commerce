function criaElementoDeletado(element) {
    var produto = element.parentElement.parentElement;
    var containerCards = document.querySelector('.container-cards');
    var card = document.createElement('div');
    card.className = 'card';
    var carddeck = document.createElement('div');
    carddeck.className = 'card-deck';
    var img = produto.querySelector('img');
    var h4 = document.createElement('h4');
    h4.textContent = produto.querySelector('.perfumes').textContent;
    var paragrafo = document.createElement('p');
    var span = document.createElement('span');
    var input = produto.querySelector('#inputCompra');
    var valorAtualizado = parseFloat(produto.querySelector('.valorProduto').textContent.replace('R$', '').trim());
    span.textContent = "Por : R$ " + (valorAtualizado / input.value).toFixed(2);
    span.className = 'valor';
    paragrafo.appendChild(span);
    var botao = document.createElement('button');
    botao.className = 'w3-button w3-white w3-border botao-addsacola';
    botao.textContent = 'Adicionar ao carrinho';
    botao.addEventListener('click', function (event) {
        event.preventDefault();
        criaElementoSacola(card, card);
        atualizaValor();
        AtualizaTotal();
        numeroParcelas(atualizaValor());
    })
    carddeck.appendChild(h4);
    carddeck.appendChild(paragrafo);
    carddeck.appendChild(botao);
    card.appendChild(img);
    card.appendChild(carddeck);
    containerCards.appendChild(card);
    atualizaValor();
    numeroParcelas(atualizaValor());
    AtualizaTotal()
    element.parentElement.parentElement.remove();
}