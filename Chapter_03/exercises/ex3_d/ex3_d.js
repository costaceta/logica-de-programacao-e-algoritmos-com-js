/**
  Elaborar um programa que leia três lados e veri que se eles podem ou não
  formar um triângulo. Para formar um triângulo, um dos lados não pode ser
  maior que a soma dos outros dois. Caso possam formar um triângulo, exiba
  também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles (2
  lados iguais) e Escaleno (3 lados diferentes). A Figura 3.10 exibe um exemplo
  de execução do exercício.
*/

const verificarLados = () => {
  const inLadoA = document.getElementById('inLadoA');
  const inLadoB = document.getElementById('inLadoB');
  const inLadoC = document.getElementById('inLadoC');

  const outMessage = document.getElementById('outMenssage');
  const outTipo = document.getElementById('outTipo');

  ladoA = Number(inLadoA.value);
  ladoB = Number(inLadoB.value);
  ladoC = Number(inLadoC.value);

  if(ladoA === 0 || ladoB === 0 || ladoC === 0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    alert('Informe lados válidos para o triângulo');
    inLadoA.focus();
    return;
  }

  if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)) {
    outMessage.textContent = "Lados não podem formar um triângulo";
  } else {
    outMessage.textContent = "Lados podem formar um triângulo";

    if(ladoA === ladoB && ladoA === ladoC ) {
      outTipo.textContent = "Tipo Equilátero";
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      outTipo.textContent = "Tipo Isósceles";
    } else {
      outTipo.textContent = "Tipo Escaleno";
    }
  }
}

const btnVerificarLados = document.getElementById('verificarLados');
btnVerificarLados.addEventListener('click', verificarLados);