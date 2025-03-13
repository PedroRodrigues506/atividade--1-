

let teclado = require (`prompt-sync`)();
let lenght : number = teclado (`Comprimento`);
let PI : number =  3.14159
let RAIO : number = teclado(`Raio:`);
let Altura : number = teclado(`Altura:`);
let VOLUME : number = 2 * PI * RAIO * RAIO * Altura;

console.log(`O valor da letra é ${VOLUME})`);