function mostrarDica() {
    var mensagem = "Lembre-se de salvar seu código com frequência!";
    console.log(mensagem);
}

mostrarDica();


//========================================================================



function contarAteCinco() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
   }
}

contarAteCinco();


//========================================================================


function mostrarData() {
    let data = new Date();
    console.log(data);
}

mostrarData();



//========================================================================



function cumprimentar(nome) {
    console.log(`Olá, ${nome}! `);
}

cumprimentar("Faustão"); 


//========================================================================


function soma(a, b) {
    return a + b;
}

console.log(soma(5, 7));

//========================================================================

function subtrair(a, b) {
    return a - b;
  }
  
  console.log(subtrair(25, 5)); 
  console.log(subtrair(40, 7)); 
  console.log(subtrair(50, 25)); 
  




  //========================================================================



  function exibirEndereco(rua, numero, bairro, cidade, estado, cep) {

    console.log(`Endereço: ${rua} Número: ${numero} Bairro: ${bairro} Cidade: ${cidade} Estado: ${estado}`);
    
  }

  exibirEndereco("Rua B", 146, "Passagem", "Valença", "RJ", "2760000");


 
function quadrado(numero) {
    return numero * numero;
  }

  function verificarIdade(idade) {
    if (idade >= 18) {
      console.log("É maior de idade");
    } else {
      console.log("É menor de idade");
    }
  }
  
 
  function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
  }
  
 
  function areaRetangulo(base, altura) {
    return base * altura;
  }
  
  
  function exibirEndereco(rua, numero, bairro, cidade, estado, cep) {
    console.log(`Rua: ${rua}, Nº ${numero}, Bairro: ${bairro}, Cidade: ${cidade} - ${estado}, CEP: ${cep}`);
  }
  
  
  function converter(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  
  function contarCaracteres(texto) {
    return texto.length;
  }
  