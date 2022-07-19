function preencherEstrelas() {
  const inNumero = document.getElementById('inNumero');
  const outEspacos = document.getElementById('outEspacos');
  const num = Number(inNumero.value);

  if(num == 0 || isNaN(num)) {
    alert('Número inválido!');
    inNumero.value = '';
    inNumero.focus();
    return;
  }

  let estrelas = "";

  for (let i = 1; i <= num; i++) {
    if(i % 2 == 1) {
      estrelas = estrelas + "*"; // posição ímpar
    } else {
      estrelas = estrelas + "_"; // posição par
    }
  }

  outEspacos.textContent = estrelas;
}

const btnPreencherEspaco = document.getElementById('btnPreencherEspaco');
btnPreencherEspaco.addEventListener('click', preencherEstrelas);