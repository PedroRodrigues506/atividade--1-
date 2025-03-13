/* (10 pontos)
8 - Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que 90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Pedro henrique rodrigues dos santos 
E-mail:pdhenrique710@gmail.com
*/

let teclado = require(`prompt-sync`)();

let anguloUm: number = parseInt(teclado(`Digite o primeiro ângulo: `));
let anguloDois: number = parseInt(teclado(`Digite o segundo ângulo: `));
let anguloTres: number = parseInt(teclado(`Digite o terceiro ângulo: `));

if (anguloUm + anguloDois + anguloTres !== 180) {
    console.log(`Os valores informados não formam um triângulo.`);
} else if (anguloUm === 90 || anguloDois === 90 || anguloTres === 90) {
    console.log(`O triângulo é Retângulo.`);
} else if (anguloUm > 90 || anguloDois > 90 || anguloTres > 90) {
    console.log(`O triângulo é Obtusângulo.`);
} else {
    console.log(`O triângulo é Acutângulo.`);
}