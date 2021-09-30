function calcMedia() {

  const inName = document.getElementById('name');
  const inGradeOne = document.getElementById('gradeOne');
  const inGradeTwo = document.getElementById('gradeTwo');

  const outMedia = document.getElementById('outMedia');
  const outStatus = document.getElementById('outStatus');

  let name = inName.value;
  let gradeOne = parseFloat(inGradeOne.value);
  let gradeTwo = parseFloat(inGradeTwo.value);

  let media = (gradeOne + gradeTwo) / 2;

  outMedia.textContent = `Média das notas: ${media.toFixed(2)}`;

  if(media < 7) {
    outStatus.textContent = `Ops..: ${name}! Você foi reprovado(a)!`;
    outStatus.style.color = "red";
    return;
  }

  outStatus.textContent = `Parabéns: ${name}! Você foi aprovado(a)!`;
  outStatus.style.color = "blue"

}

const btnMedia = document.getElementById('btnMedia');
btnMedia.addEventListener('click', calcMedia);