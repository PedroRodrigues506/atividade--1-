/* (15 pontos)
9 - Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg.
Faça um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou não, caso não, diga o(s) motivo(s).
Nome: Pedro Henrique Rodrigues dos santos 
*/

let teclado = require(`prompt-sync`)();

let idade: number = parseInt(teclado(`Digite sua idade: `));
let peso: number = parseInt(teclado(`Digite seu peso (Kg): `));

if (idade >= 18 && idade <= 67 && peso > 60) {
    console.log(`Você pode doar sangue.`);
} else {
    console.log(`Você não pode doar sangue por seguinte(s) motivo(s):`);
    if (idade < 18) {
        console.log(`- Idade inferior a 18 anos.`);
    }
    if (idade > 67) {
        console.log(`- Idade superior a 67 anos.`);
    }
    if (peso <= 60) {
        console.log(`- Peso inferior ou igual a 60Kg.`);
    }
}