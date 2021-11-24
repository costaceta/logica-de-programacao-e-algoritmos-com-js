/**
 * Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão diponíveis
 * em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de
 * um cliente, verifique sua validade (ou seja, se pode ser pago com as notas disponíveis) e
 * informe o número mínimo de notas de 100, 50, e 10 necessárias para pagar esse saque.
 */

function exibirSaques() {
  const inSaque = document.getElementById("inSaque");

  const outNotas100 = document.getElementById("outNotas100");
  const outNotas50 = document.getElementById("outNotas50");
  const outNotas10 = document.getElementById("outNotas10");

  outNotas100.textContent = '';
  outNotas50.textContent = '';
  outNotas10.textContent = '';

  let saque = Number(inSaque.value);
  let notas100, notas50, notas10;

  if(saque == '' || isNaN(saque)) {
    alert('O Saque deve ser preenchido com um número válido!');
    inSaque.focus();
    return;
  }

  if(saque % 10 != 0) {
    alert('O valor do Saque deve ser um múltiplo de 10!');
    inSaque.focus();
    return;
  }

  // Solution 01
  if(saque >= 100) {
    notas100 = saque / 100;
    outNotas100.textContent = "Notas de R$ 100: " + notas100;
  }

  if(saque >= 50) {
    notas50 = saque / 50;
    outNotas50.textContent = "Notas de R$ 50: " + notas50;
  }

  if(saque >= 10) {
    notas10 = saque / 10;
    outNotas10.textContent = "Notas de R$ 10: " + notas10;
  }

}

const btnShow = document.getElementById("btnShow");
btnShow.addEventListener('click', exibirSaques);
