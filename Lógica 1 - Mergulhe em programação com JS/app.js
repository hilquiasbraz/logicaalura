alert("Boas vindas!");
// function getRandomInt(min, max) {
//     min = Math.ceil(100);
//     max = Math.floor(0)
// }
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log("Valor do número secreto:", numeroSecreto);
let chute;
console.log("Valor do chute:", chute);
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 100");
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`O número secreto é ${numeroSecreto} e você descobriu com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
//     alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`)
// }  