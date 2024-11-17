// função para geraar um número aleatóro
alert ('boas vindas ao jogo do número secreto');

const numeroMaximo = 100;
const nivelFacil = 20;
const nivelMedio = 10;
const nivelDificil = 5;

let numeroSecreto = Math.randon();
let chute;
let tentativas = 0;

function gerarNumeroAleatorio() {
    let numero = 0;
    numero = Math.floor(numeroSecreto * numeroMaximo) + 1;

    return numero;
    }

    numeroSecreto = gerarNumeroAleatorio();

    /*
    if = Se
    Else = Senão
    while = Enquanto
    */
   while (chute != numeroSecreto) {
    tentativas++;
    if(tentativas<= nivelMedio) {
chute = prompt(`Escolha um numero de 1 a ${numeroMaximo}:`);

if (chute == numeroSecreto) {
    alert(`Parabéns ! voce acertou o número secreto ${numeroSecreto}
        // com ${tentativas} ${tentativas == 1 ? 'tentativa' : 'tentativa'}.`);
} else { 
alert(`voce errou! \n\nNúmero de tentativa(s): ${tentativas} de ${nivelMedio}`);

if (numeroSecreto > chute) {
    alert(`O número secreto é maior ${chute}.`)
} else {
    alert(` O numero secreto é menor ${chute}.`)
}
}
    } else {
        alert('Game Over:\nVoce perdeu!\n\nTente novamente.');
        break; 
   }
   }