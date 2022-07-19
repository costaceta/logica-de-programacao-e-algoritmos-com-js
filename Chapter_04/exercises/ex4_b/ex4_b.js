// b) Digamos que o número de chinchilas de uma fazenda triplica a cada ano,
// após o primeiro ano. 
// Elaborar um programa que leia o número inicial de
// chinchilas e anos e informe ano a ano o número médio previsto de chinchilas
// da fazenda. Validar a entrada para que o número inicial de chinchilas seja
// maior ou igual a 2 (um casal). A Figura 4.16 exibe a página com um exemplo
// de saída do programa.

function repetirFruta() {
  const inNumChinchilas = document.getElementById('inNumChinchilas');
  const inNumAnos = document.getElementById('inNumAnos');
  const outResult = document.getElementById('outResult')

  const numChinchilas = Number(inNumChinchilas.value);
  const numAnos = Number(inNumAnos.value);

  if( isNaN(numChinchilas) || numChinchilas === 0 || numChinchilas <= 2 ) {
    alert('Digite um numero maior que 2');
    inNumChinchilas.focus();
    return;
  }

  let acumulator = numChinchilas;
  let listaDeChinchilas = '';

  for (let i = 1; i <= numAnos; i++) {
    listaDeChinchilas += i + ' Ano: ' + acumulator + ' Chinchilas<br>';
    acumulator *= 3;
  }

  outResult.innerHTML = listaDeChinchilas;
}

const showResult = document.getElementById("showResult");
showResult.addEventListener('click', repetirFruta);
