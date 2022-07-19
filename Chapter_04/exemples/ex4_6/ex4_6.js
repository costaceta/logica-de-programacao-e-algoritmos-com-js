
const inNumero = document.getElementById('inNumero');
const outResposta = document.getElementById('outResposta');

function veficarPrimo() {
  const num = Number(inNumero.value);

  if(num == 0 || isNaN(num)) {
    alert("Número inválido!");
    inNumero.focus();
    inNumero.value = '';

    return;
  }

  let temDivisor = 0;

  for (let i = 2; i <= num / 2; i++) {
    if(num % i == 0) {
      temDivisor = 1;
      break;
    }
  }

  if(num > 1 && !temDivisor) {
    outResposta.textContent = num + ' È primo!';
    return;
  }

  outResposta.textContent = num + ' Não é primo!';
}

const btnVerificarPrimo = document.getElementById('btnVerificarPrimo');
btnVerificarPrimo.addEventListener('click', veficarPrimo);
