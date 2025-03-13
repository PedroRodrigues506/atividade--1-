/* (5 pontos)
4 - Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.  
Nome Aluno: Pedro Henrique Rodrigues dos santos
*/

let teclado = require(`prompt-sync`)();

let num1: number = parseInt(teclado(`Digite o primeiro número: `));
let num2: number = parseInt(teclado(`Digite o segundo número: `));
let num3: number = parseInt(teclado(`Digite o terceiro número: `));

if (num1 > num2) {
    [num1, num2] = [num2, num1];
}
if (num2 > num3) {
    [num2, num3] = [num3, num2];
}
if (num1 > num2) {
    [num1, num2] = [num2, num1];
}

console.log(`Números em ordem crescente: ${num1}, ${num2}, ${num3}`);