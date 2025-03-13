var teclado = require(" prompt - sync ")();
var idade = 0;
var salario = 0;
var tot_pess_atend_condicao = 0; // número de pessoas que se enquadram na condição
var n_pess = 0; // número de pessoas verificada
do {
    idade = parseFloat(teclado("Digite a idade do funcion\u00E1rio: "));
    salario = parseFloat(teclado("Digite o sal\u00E1rio: "));
    if (idade < 30 && salario > 3000) {
        tot_pess_atend_condicao++;
        n_pess++;
    }
    else {
        n_pess++;
    }
} while (n_pess <= 50);
console.log("O total de pessoas \u00E9 " + n_pess);
