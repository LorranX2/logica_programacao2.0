

let anterior = 0;
let atual = 1;

console.log("Sequência de Fibonacci (20 primeiros termos):");

for (let i = 1; i <= 20; i++) {
    console.log(anterior);

    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}
