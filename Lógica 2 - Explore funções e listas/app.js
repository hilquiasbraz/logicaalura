function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Digite um número entre 1 e 10');

function verificarChute() {
    console.log('O botão foi clicado!')
}

function novoJogo() {
    console.log('O botão foi clicado!')
}