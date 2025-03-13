const  teclado = require(`prompt-sync`)();

let x: number = parseInt(teclado(`Digite o primeiro numero `));
let y: number = parseInt(teclado(`Digite o primeiro numero:`));

console.log(`Valores digitados: x = &{x} , y = ${y}`);

[x, y] = [y, x]

console.log(`Valores trocados: x = ${x}, y = ${y}`);