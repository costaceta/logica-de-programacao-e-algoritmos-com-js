// c) Elaborar um programa que leia um número e veri que se ele é ou não
// perfeito. Um número dito perfeito é aquele que é igual à soma dos seus
// divisores inteiros (exceto o próprio número). O programa deve exibir os
// divisores do número e a soma deles. A Figura 4.17 exibe a página
// do programa com um exemplo de número perfeito.

function verificarPerfeito() {
  const inNum = document.getElementById('inNum');
  const outResult = document.getElementById('outResult');
  const outDivisores = document.getElementById('outDivisores');

  const num = Number(inNum.value);

  if(num === 0 || isNaN(num)) {
    alert('Digite um número válido!')
    inNum.focus();
    return;
  }

  let totalDivisores = 0;
  let divisores = 1;
  let result = '';

  for (let i = 2; i < num / 2; i++) {
    if( num % i === 0 ) {
      totalDivisores += i;
      divisores += ', ' + i
    }
  }

  if(totalDivisores === num) {
    result = num + ' É um Número Perfeito'
  } else {
    result = num + ' É Não Número Perfeito'
  }

  outDivisores.innerText = 'Divisores do ' + num + ': ' + divisores + '(Soma: ' + totalDivisores + ')';
  outResult.innerText = result;
}

const showResult = document.getElementById("showResult");
showResult.addEventListener('click', verificarPerfeito);
