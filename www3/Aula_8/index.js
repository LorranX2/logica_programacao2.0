require("./mensagem")

const ola = require("./saudacao")

ola("Lorran")

//==========================================================

const verificarIdade = require("./idade")

verificarIdade(18)

//==========================================================

const calc = require("./calculadora")

calc.somar(5, 4)
calc.multiplicar(2,5)

//==========================================================

const mostrarHora = require('./modulo/hora');

mostrarHora()