alert("Boas vindas!");
let numeroSecreto = 5;
console.log("Valor do número secreto:", numeroSecreto);
let chute;
console.log("Valor do chute:", chute);

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 10");
    if (chute == numeroSecreto) {
        alert(`Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}