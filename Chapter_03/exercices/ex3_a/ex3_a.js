/**
 *  Elaborar um programa que leia um número. Informe se ele é par ou ímpar.
 *  A Figura 3.7 ilustra a tela de execução do programa. Para os
 *  exercícios, foi utilizada uma gura padrão, mas você pode substituí-la caso
 * tenha interesse.
 */
function evenOrOddNumber() {
  var inNumber = document.getElementById('inNumber');
  var outResult = document.getElementById('outResult');

  var number = Number(inNumber.value);

  if(isNaN(number) || inNumber.value == '') {
    alert('Type a valid number.');
    inNumber.focus();
    return;
  }

  if(number % 2 == 0) {
    outResult.textContent = "It's an even number";
    return;
  }

  outResult.textContent = "It's an odd number";
}

const showResult = document.getElementById("showResult");
showResult.addEventListener('click', evenOrOddNumber);
