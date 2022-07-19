/**
 * a) Elaborar um programa que leia o nome de uma fruta e um número. O
 * programa deve repetir a exibição do nome da fruta, de acordo com o número
 * informado. Utilize o “*” para separar os nomes. A Figura 4.15 ilustra a
 * execução do programa.
 */

function repetirFruta() {
  const inFruta = document.getElementById('inFruta');
  const inNumber = document.getElementById('inNumber');
  const outResult = document.getElementById('outResult');

  const fruta = inFruta.value;
  const number = Number(inNumber.value);

  if(fruta === '' || isNaN(number) || inNumber.value === '') {
    alert("Informe corretamente os dados");
    inNumber.focus();
    return;
  }

  let result = '';

  for (let i = 1; i < number; i++) {
    result += fruta + ' * ';
  }

  result += fruta

  outResult.innerHTML = result;
}

const showResult = document.getElementById("showResult");
showResult.addEventListener('click', repetirFruta);
