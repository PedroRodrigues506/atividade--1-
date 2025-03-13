/* (10 pontos)
7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze.
Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
Nome Aluno: Pedro henrique rodrigues dos santos 
E-mail:pdhenrique710@gmail.com
*/

let teclado = require(`prompt-sync`)();

let quantidade: number = parseInt(teclado(`Digite a quantidade de maçãs compradas: `));

let preco: number = quantidade < 12 ? 0.30 : 0.25;
let total: number = quantidade * preco;

console.log(`O valor total da compra é R$ ${total.toFixed(2)}`);