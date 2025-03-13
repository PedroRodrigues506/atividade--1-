let  teclado = require("prompt-sync")();
console.log(`-------------------------`);
console.log(`-     calculo media    - `);
console.log(`--------------------------`);
let tempc = parseInt(teclado("digete a temperatura em Celsius: "));
let tempf: number ;
tempf =(tempc*(9/6)) + 32

console.log(`a temperatura em FAHRENHEIT:${tempf}`)