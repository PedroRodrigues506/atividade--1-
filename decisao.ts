let teclado  = require (` prompt - sync `)();

let idade: number = 0;
let salario: number = 0;
let tot_pess_atend_condicao: number = 0; // número de pessoas que se enquadram na condição
let n_pess: number = 0; // número de pessoas verificada

do{
    idade = parseFloat(teclado(`Digite a idade do funcionário: `));
    salario = parseFloat(teclado(`Digite o salário: `))

    if(idade < 30 && salario > 3000){
        tot_pess_atend_condicao++;
        n_pess++;
    }
    else{
        n_pess++;
    }

} while(n_pess <= 50)

console.log(`O total de pessoas é ${n_pess}`)