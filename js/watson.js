const chatMessageTemplate = (message, from) => `
  <div class="from-${from}">
    <div class="message-inner">
      <p>${message}</p>
    </div>
  </div>
  `;

const InsertTemplateInChat = (template) => {
    const div = document.createElement('div');
    div.innerHTML = template;
    const chat = document.getElementById('chat');
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
};

var contador = 0;
var contador2 = 0;
const getWatsonMessageAndInsertTemplate = async (message) => {
    const uri = `http://localhost:3000/html/chatbot/${message}`;
    const response = await (await fetch(uri)).json();
    if (response.code != 'EAI_AGAIN') {
        contador = 1;
        const template = chatMessageTemplate(response.output.text, 'watson');
        InsertTemplateInChat(template);
    }
};
setInterval(() => {
    var temp = navigator.onLine;
    const imgoff = document.querySelector('#status');
    if (temp) {
        if (contador == 0) {
            imgoff.src = '../../imagens/online.png';
            const template = chatMessageTemplate('Estamos Conectados', 'watson');
            InsertTemplateInChat(template);
            getWatsonMessageAndInsertTemplate();
            textInput.value = '';
            contador = 1;
            contador2 = 0;
        }
    } else {
        if (contador2 == 0) {
            imgoff.src = '../../imagens/offline.png';
            const template = chatMessageTemplate('Estamos sem Conexão', 'watson');
            InsertTemplateInChat(template);
            textInput.value = '';
            contador = 0;
            contador2 = 1;
        }
    }
}, 15000);


getWatsonMessageAndInsertTemplate();

const textInput = document.querySelector('#textInput');
textInput.addEventListener('keydown', (event) => {
    if (event.keyCode == 13 && textInput.value) {
        const template = chatMessageTemplate(textInput.value, 'user');
        InsertTemplateInChat(template);
        getWatsonMessageAndInsertTemplate(textInput.value);
        textInput.value = '';
    }
});

let watson = document.querySelector('.watsonbutton');
let view = document.querySelector('.watsonview');

watson.addEventListener('click', function(event) {
    event.preventDefault();
    view.classList.remove('disable');
    view.classList.add('modificaposicao');
    watson.classList.add('disable');
    $(".watsonleft").animate({
        right: '0px',
        opacity: '1',
        height: '310px',
        width: '25vh',
    });
    let textInput = document.querySelector('#textInput');
    textInput.focus();
    
})


let watsonfechar = document.querySelector('.watson-alterado');

watsonfechar.addEventListener('click', function(event) {
    event.preventDefault();
    view.classList.remove('modificaposicao');
    $(".watsonleft").animate({
        right: '0px',
        opacity: '0',
        height: '0px',
        width: '0px',
    });
    watson.classList.remove('disable');
})

var inputSend = document.querySelector(".watson-alterado2");

inputSend.addEventListener('click', function(event) {
    event.preventDefault();
    if (textInput.value) {
        const template = chatMessageTemplate(textInput.value, 'user');
        InsertTemplateInChat(template);
        getWatsonMessageAndInsertTemplate(textInput.value);
        textInput.value = '';
    }
})

setInterval(() => {
    var allMessages = document.querySelectorAll('.from-watson');
    allMessages.forEach(element => {
        if (element.querySelector('.message-inner').querySelector('p').textContent == 'Muito Obrigado, volte sempre!') {
            setTimeout(() => {
                view.classList.add('disable');
                view.classList.add('modificaposicao');
                element.remove(this);
            }, 3000);
        }
    })
}, 5000);
