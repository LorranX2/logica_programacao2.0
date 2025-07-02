let idade = 10;

if (idade <= 15) {
    console.log("Não pode votar");
} 
else if (idade >= 16 && idade <= 17) {
    console.log("Voto opcional.");
} 
else if (idade >= 18 && idade <= 69) {
    console.log("Voto obrigatório");
} 
else if (idade >= 70) {
    console.log("Voto opcional.");
}