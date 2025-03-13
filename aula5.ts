let teclado = require(`prompt-sync`)();
console.log(`-------------------------`);
console.log(`-     calculo media    - `);
console.log(`--------------------------`);
let n1: number = parseInt(teclado(`digite número n1: `));
let n2: number = parseInt(teclado(`digite número n2: `));
let n3: number = parseInt(teclado(`digite número n3: `));
let n4: number = parseInt(teclado(`digite número n4: `));
let n5: number = parseInt(teclado(`digite número n5: `));
let n6: number = parseInt(teclado(`digite número n6: `)); 
let n7: number = parseInt(teclado(`digite número n7: `));
let n8: number = parseInt(teclado(`digite número n8: `));
let n9: number = parseInt(teclado(`digite número n9: `));
let n10: number = parseInt(teclado(`digite número n10:`));
let media: number = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) /10;

console.log(`A media ${media}`);