// Elaborar um programa que leia um número e calcule sua raiz quadrada.
// Caso a raiz seja exata (quadrados perfeitos), informá-la, caso contrário, informe:
// "Não há raiz exata para ..."

function calcRaiz() {

  const inNumber = document.getElementById('inNumber');
  const outResult = document.getElementById('outResult');

  let number = Number(inNumber.value);

  if(number == '' || isNaN(number)) {
    alert('Digite um número válido!');
    inNumber.focus();
    return;
  }

  let square = Math.sqrt(number);

  // Solution 01
  // if(number % square != 0) {
  //   outResult.textContent = "Não há raiz exata para: " + number;
  //   outResult.style.color = "red";
  //   return;
  // }

  // Solution 02
  if(square != Math.floor(square)) {
    outResult.textContent = "Não há raiz exata para: " + number;
    outResult.style.color = "red";
    return;
  }

  outResult.textContent = "A raiz de " + number + " é: " + square;
  outResult.style.color = "blue";

}

const btnShow = document.getElementById('btnShow');
btnShow.addEventListener('click', calcRaiz);