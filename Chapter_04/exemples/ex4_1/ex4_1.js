function showTabuada() {
  const inNumber = document.getElementById('inNumber');
  const outResult = document.getElementById('outResult');
  const number = Number(inNumber.value);

  // Garante que o usuário digitou um número válido
  if(number === 0 || isNaN(number)) {
    alert("Digite num número válido");
    inNumber.focus();
    return;
  }

  let result = '';

  for (let i = 1; i < 10; i++) {
    result += number + " x " + i + " = " + number * i + "<br>";
  }

  outResult.innerHTML = result;

}

const btnShowTabuada = document.getElementById('showTabuada');


btnShowTabuada.addEventListener('click', showTabuada);