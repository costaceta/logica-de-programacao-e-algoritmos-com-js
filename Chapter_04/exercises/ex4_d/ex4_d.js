/* d) Elaborar um programa que leia um número e exiba estrelas na página, em
linhas diferentes. A cada nova linha, o número de estrelas deve ser
incrementado. 

Observação: caso você informe um valor alto, as linhas
podem ultrapassar o tamanho da imagem e se alinhar à margem esquerda
da página. Para evitar que isso ocorra, crie uma nova classe no arquivo
estilos.css, que de na uma utuação à direita para essa imagem. 

A Figura
4.18 ilustra uma execução do programa desse exercício. */

function criarEstrelas() {
  const inNumLinhas = document.getElementById('inNumLinhas');
  const outResult = document.getElementById('outResult');

  const linhas = Number(inNumLinhas.value);

  if(isNaN(inNumLinhas.value) || inNumLinhas.value ==='') {
    alert('Digite um número válido!')
    inNumLinhas.focus();
    return;
  }

  let estrelas = '';

  for (let i = 0; i <= linhas; i++) {
    for (var j = 1; j <= i; j++) {
      estrelas = estrelas + "*"
    }

    estrelas = estrelas + "\r";
  }

  outResult.textContent = estrelas;

}

const btnCriarEstrelas = document.getElementById('criarEstrelas');
btnCriarEstrelas.addEventListener('click', criarEstrelas)