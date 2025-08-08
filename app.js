alert("Boas vindas!");
let numeroSecreto = 5;
console.log("Valor do número secreto:", numeroSecreto);
let chute;
console.log("Valor do chute:", chute);
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 10");
    if (chute == numeroSecreto) {
        alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    // tentativas = tentativas + 1;
    tentativas++;
}