let teclado = require(`prompt-sync`)()
let idade: number = 0;
let salario: number = 0;
let total_pess_atend_condicao: number = 0
let n_pess: number = 0 // numero de pessoas

let contador: number = 0;
do {
  idade = parseFloat(teclado(`Digite a idade do funcionario ${n_pess + 1}: `));
  salario = parseFloat(teclado(`Digite o salario do funcionario ${n_pess + 1}: `));

  if (idade < 30 && salario > 3000) {
    total_pess_atend_condicao++;
    n_pess++;

  }
  else {
    n_pess++;
  }

} while (n_pess < 4)
console.log(`o total de pessoas é ${n_pess}`)