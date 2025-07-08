

//Desafio 1

let numeros = [1,2,3,4,5,6,15,20]

let pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares); 

//Desafio 2
let valores = [5, 12, 8, 20, 3, 15];

  let maiores_10 = valores.filter(maiores_10 => maiores_10>10)
    
console.log(maiores_10)

// Desafio 3

let nomes = ['Ana', 'Beatriz', 'João', 'Carlos', 'Bernadete'];

let nomes_menores_5 = nomes.filter(nomes => nomes.length < 5)

console.log(nomes_menores_5)

//Desafio 4

let lista = [0,1,0,3,5,0,7]

let maiores_que_zero = lista.filter(lista => lista !== 0)

console.log(maiores_que_zero)

//Desafio 5 

let paises = ['Brasil', "Argentina", "Chile"]
paises.pop() 

console.log (paises)

//Desafio 6 

let senha = "senhateste";

if (senha.length < 8) {
    console.log("O mínimo de caracteres para a senha é 8.");
} else {
    console.log("Senha válida.");
}
