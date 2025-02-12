// função para gerar um número aleatório
alert('Boas vindas ao jogo do número secreto');

const numeroMaximo = 100;
const nivelFacil = 20;
const nivelMedio = 10;
const nivelDificil = 5;

let numeroSecreto = Math.random();
let chute = 0;
let nivel = 0;
let nivelEscolhido = 0;
let tentativas = 0;
let nivelValido = [1, 2, 3];

function gerarNumeroAleatorio() {
    let numero = 0;
    numero = Math.floor(numeroSecreto * numeroMaximo) + 1;

    return numero;
}

numeroSecreto = gerarNumeroAleatorio();

/*
if = se
Else = senão
While = Enquanto
Switch Case = é uma construção condicionall que permite que um bloco de código seja executado com base na avaliação de  uma expressão 

*/

while (!nivelValido.includes(nivel)) {
    nivel = parseInt(prompt(

        
    ))
}