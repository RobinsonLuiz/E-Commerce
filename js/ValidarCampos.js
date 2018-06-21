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
        this.validaData();
        this.validaEmail();
        this.validaSenha();
        this.enviaErros();
    }

    validaNome() {
        let valida = this.$('#nome');
        if (valida.value) {
            var contaVazio = 0;
            var contaPalavra = 0;
            var resposta = valida.value.toLowerCase();
            for (var i = 0; i < valida.value.length; i++) {
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

    validaSenha() {
        let senha = this.$('#password');
        let csenha = this.$('#cpassword');
        if (senha.value && csenha.value) {
            if (senha.value != csenha.value) {
                senha.classList.remove('correto');
                senha.classList.add('errado');
                senha.focus();
                this.adicionaErros('Senha não correspondem', 5);
            } else {
                senha.classList.add('correto');
                senha.classList.remove('errado');
            }
        } else {
            this.adicionaErros('Senha não correspondem', 5);
            senha.classList.remove('correto');
            senha.classList.add('errado');
            senha.focus();
        }
    }

    enviaErros() {
        let valida = this.$('.erros');
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
                erros.push({
                    id: id,
                    name: string
                });
                return;
            }
        }
        erros.push({
            id: id,
            name: string
        });
        nenhumErro = false;
    }

    nenhumErro() {
        return nenhumErro;
    }
}