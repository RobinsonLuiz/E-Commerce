let erros = [];
let res = [];
let nenhumErro = true;
class ValidarCampos {
    
    constructor() {
        this.$ = document.querySelector.bind(document);
    }

    validaCampos() {
        var tempo = document.querySelector(".erros");
        tempo.textContent = "";
        erros = [];
        this.validaNome();
        this.validaIdade();
        this.validaData();
        this.validaEmail();
        this.validaCpf();
        this.validaTelefone();
        this.enviaErros();
    }

    validaNome() {
        let valida = this.$('#nome');
        if (valida.value) {     
            var contaVazio = 0;
            var contaPalavra = 0;
            var resposta = valida.value.toLowerCase();
            for(var i = 0; i < valida.value.length;i++) {
            if (valida.value.charAt(i) == " ") contaVazio++;
            if (valida.value.charAt(i) >= 'a' && valida.value.charAt(i) <= 'z') contaPalavra++;
            }
            if (contaPalavra < 10) {
                valida.classList.remove('correto');
                valida.classList.add('errado');
                valida.focus();
                this.adicionaErros("Por favor insira um nome e um sobrenome", 1);
            } else {
                valida.classList.add('correto');
                valida.classList.remove('errado');
            }      
        } else {
            valida.classList.add('errado');
            valida.classList.remove('correto');
            valida.focus();
            this.adicionaErros("Por favor insira um nome e um sobrenome", 1);
        }
    }

    validaIdade() {
        let valida = this.$('#idade');
        if ((valida.value < 5) || (valida.value > 120)) {
            valida.classList.remove('correto');
            valida.classList.add('errado');
            valida.focus();
            this.adicionaErros("Por favor seleciona uma idade que seja superior a 5 anos", 2);
        } else {
            valida.classList.add('correto');
            valida.classList.remove('errado');
        }
    }

    validaData() {
        let valida = this.$('#datanascimento');
        let data = new Date(valida.value);
        let velhoDemais = new Date('1920-01-01');
        let dataAtual = new Date();
        if (valida.value) {
            if (data.getFullYear() < velhoDemais.getFullYear()) {
                valida.classList.remove('correto');
                valida.classList.add('errado');
                valida.focus();
                this.adicionaErros("Por favor selecione uma data válida", 3);
            } else {
                if (data.getFullYear() >= (dataAtual.getFullYear() - 10)) {
                    valida.classList.remove('correto');
                    valida.classList.add('errado');
                    valida.focus();
                    this.adicionaErros("Por favor selecione uma data válida", 3);
                } else {
                    valida.classList.add('correto');
                    valida.classList.remove('errado');
                }
            }
        } else {
            valida.classList.remove('correto');
            valida.classList.add('errado');  
            valida.focus();
            this.adicionaErros("Por favor selecione uma data válida", 3);    
        }
    }

    validaEmail() {
        let valida = this.$('#email');
        if (!valida.value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
            valida.classList.remove('correto');
            valida.classList.add('errado');
            valida.focus();
            this.adicionaErros("Por favor insira um email válido", 4);
        } else {
            valida.classList.add('correto');
            valida.classList.remove('errado');
        }
    }

    validaCpf() {
        let valida = this.$('#cpf');
        if (!valida.value.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)) {
            valida.classList.remove('correto');
            valida.classList.add('errado');
            valida.focus();
            this.adicionaErros("Por favor selecione um CPF válido (Ex: 000.000.000-00)", 5);
        } else {
            valida.classList.add('correto');
            valida.classList.remove('errado');
        }
    }

    validaTelefone() {
        let valida = this.$('#telefone');
        if (!valida.value.match(/^\d{2}\ \9\d{8}/)) {
            valida.classList.remove('correto');
            valida.classList.add('errado');
            valida.focus();
                this.adicionaErros("Por favor selecione um telefone válido (Ex: 53 900000000)", 6);
        } else {
            valida.classList.add('correto');
            valida.classList.remove('errado');
        }
    }

    enviaErros() {
        let valida = this.$('.erros');
        console.log(erros.length);
        if (erros.length == 0) {
            nenhumErro = true;
            return;
        }
        for (var i = 0; i < erros.length; i++) {
            var div = document.createElement("div");
            div.classList.add("alert");
            div.classList.add("alert-danger");
            div.textContent = erros[i].name;
            valida.append(div);
        }
    }

    adicionaErros(string, id) {
        for (var i = 0; i < erros.length; i++) {
            if (erros[i].id == id) return;
            else {
                erros.push({id: id,
                name: string});
                return;
            }
        }
        erros.push({id: id,
            name: string});
        nenhumErro = false;
    }

    nenhumErro() {
        return nenhumErro;
    }
}