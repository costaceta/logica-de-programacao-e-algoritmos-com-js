function showDecrescer() {
  const inNumber = document.getElementById('inNumber');
  const outResult = document.getElementById('outResult');
  const number = Number(inNumber.value);

  // Garante que o usuário digitou um número válido
  if(number === 0 || isNaN(number)) {
    alert("Digite num número válido");
    inNumber.focus();
    return;
  }

  let result = "Entre " + number + " e 1: " + number;

  for (var i = number - 1; i > 0; i--) {
    result +=  ", " + i;
  }

  result += ".";

  outResult.innerHTML = result;

}

const btnDecrecer = document.getElementById('decrecer');
btnDecrecer.addEventListener('click', showDecrescer);