let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Digite um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Você acertou o número secreto ${numeroSecreto}. Parabéns!`);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número é maior que ${chute}`);
        }
    }
}

function novoJogo() {
    console.log('O botão foi clicado!');
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}