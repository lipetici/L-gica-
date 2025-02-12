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
    nivel = parseInt(prompt(`Escolha o nível do jogo:
        1 - nivel fácil: ${nivelFacil} tentativas
        2 - nivel Médio: ${nivelMedio} tentativas
        3 - nivel Difícil: ${nivelDificil} tentativas `));

        switch (parseInt(nivel)) {
            case 1:
                nivelEscolhido = nivelFacil;
                break;
                case 2:
                    nivelEscolhido = nivelMedio;
                    break;
                    case 3:
                        nivelEscolhido = nivelDificil;
                        break;
                        default:
                            alert('nivel informado incorreto!\nInforme um nivel de 1 a 3.')
        }
};

while (chute != numeroSecreto) {
    tentativas++;
    if (tentativas<= nivelEscolhido) {
        chute = prompt(`Escolha um numero de 1 a ${numeroMaximo}: `);

        if (chute == numeroSecreto) {
            alert(`Parabéns Voce acertou o numero secreto ${numeroSecreto}
                com ${tentativas} ${tentativas == 1 ? 'tentativa' : 'tentativas'}.`)
        } else {
            alert(`Voce Errou !!!\n\nNúmero de tentativas(s): ${tentativas} de ${nivelEscolhido}`);

if (tentativas < nivelEscolhido) {
    if (numeroSecreto > chute) {
        alert(`O número secreto é maior ${chute}.`);
    } else {
        alert(`O número secreto é menor ${chute}.`);
    }
}
}
} else {
    alert(`Game Over:\nVoce perdeu !!!\n\nTente novamente
        \n\nO número secreto era: ${numeroSecreto}.`);
        break;
}
}

