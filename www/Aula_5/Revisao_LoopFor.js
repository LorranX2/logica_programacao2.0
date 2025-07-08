/*let valores = [3,12,8,25,7];

let contador = 0

for (let i = 0; i < valores.length; ++i){
    if (valores[i] > 10) {
        ++contador

    }

}

console.log(contador)*/




//==========================================================================




/*let notas = [7, 5, 6, 4, 8];

let notasTrocadas = []

for (let i = 0; i < notas.length; ++i){
    if (notas[i] < 6 ) {
        notasTrocadas.push(6)
    }
    else{
        notasTrocadas.push(notas[1])
    }

}

console.log(notasTrocadas)*/


//=========================================================================



/*let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let numerosPares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    numerosPares.push(numeros[i]);
  }
}

console.log(numerosPares);*/



//==========================================================================




/*let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let impares = [];

for (let i = 0; i < numeros.length; i ++) {
    if (numeros[i] % 2 !== 0) {
        impares.push(numeros[i])
    }
}
console.log (impares) // mostra os numeros impares
console.log(impares.length); // conta a quantidade de numeros*/



//===========================================================================




/*  
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let contadorImpares = 0;

for (let i = 0; i < numeros.length; i ++) {
  if (numeros[i] % 2 !== 0) {
    contadorImpares++;
  }
}

console.log(contadorImpares);
*/



//================================================================================


/*
let nomes = ["João", "Gabriela", "Ana", "Roberto"];
let letras5 = 0;

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].length > 5) {
    letras5++;
  }
}

console.log(letras5);
*/

//===============================================================================

let saldos = [100, -20, 200, -30, 150];
let somaPositivos = 0;

for (let i = 0; i < saldos.length; i++) {
  if (saldos[i] > 0) {
    somaPositivos += saldos[i];
  }
}

console.log(somaPositivos);
