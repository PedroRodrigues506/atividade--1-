/* (15 pontos)
6 – Ler valor de nota de N1 e N2, calcular a média e escrever a nota correspondente, tal que 0 é a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), conforme a seguinte tabela:
  A  -   nota >= 8,5  e nota <= 10
  B  -   nota >= 7    e nota < 8,5
  C  -   nota >= 5    e nota < 7
  D  -   nota >= 3    e nota < 5
  E  -   nota < 3

Nome Aluno: Pedro henrique rodrigues dos santos
*/

let teclado = require(`prompt-sync`)();

let n1: number = parseInt(teclado(`Digite a nota N1: `));
let n2: number = parseInt(teclado(`Digite a nota N2: `));

let media: number = (n1 + n2) / 2;
let conceito: string;

if (media >= 8.5 && media <= 10) {
    conceito = `A`;
} else if (media >= 7 && media < 8.5) {
    conceito = `B`;
} else if (media >= 5 && media < 7) {
    conceito = `C`;
} else if (media >= 3 && media < 5) {
    conceito = `D`;
} else {
    conceito = `E`;
}

console.log(`A média do aluno é ${media} e seu conceito é ${conceito}`);