let numero = 1900;

if ((numero % 4 === 0 && numero % 100 !== 0) || (numero % 400 === 0)) {
    console.log("O ano " + numero + " é bissexto.");
} else {
    console.log("O ano " + numero + " não é bissexto.");
}