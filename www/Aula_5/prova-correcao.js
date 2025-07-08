let nome = "Gustavo Lima"
let idade = 33

console.log ("Nome: " + nome + ", tem " + idade + " anos de idade.")

//=============================================================================

let nota = 6;

if (nota >= 7) {
    console.log("Aprovado.")


} else if (nota >= 5 && nota < 7){
console.log("Recuperação.")

}

else if (nota < 5 ){
    console.log("Reprovado.")

}

//===============================================================================

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

let impares = numeros.filter(numero => numero % 2 === 1);

console.log(impares); numeros.filter(numero => numero % 2 === 1)




//==============================================================================

let frutas = ["Maçã", "Abacate", "Laranja", "Uva", "Maracujá"];
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}