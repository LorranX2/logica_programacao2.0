   function media(lista) {
        let soma = 0;
    
        for (let i = 0; i < lista.length; i++) {
            soma += lista[i];
        }
        var resultado = soma / lista.length;
        console.log("a média é: " + resultado);
    }
    
    module.exports = media;