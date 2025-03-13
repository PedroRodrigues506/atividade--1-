var teclado = require("prompt-sync")();
console.log("--------------------------");
console.log("-     calculo media    -  ");
console.log("--------------------------");
var tempc = parseInt(teclado("digete a temperatura em Celsius: "));
var tempf;
tempf = (tempc * (9 / 5)) + 32;
console.log("a temperatura em FAHRENHEIT:".concat(tempf));
