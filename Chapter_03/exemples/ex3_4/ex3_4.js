
function showTime() {
  // Get elements from DOM
  const inTime = document.getElementById('inTime');
  const outResult = document.getElementById('outResult');

  let timeInBrasil = Number(inTime.value);
  let timeInFreach;

  // Validate field
  if(timeInBrasil == '' || isNaN(timeInBrasil)) {
    alert("O campo hora não está preenchido ou não é um número!");
    inTime.focus();
    return;
  }

  timeInFreach = timeInBrasil + 5;

  if(timeInFreach > 24)
    timeInFreach = timeInFreach - 24;

  outResult.textContent = "Hora na França: " + timeInFreach.toFixed(2);
}

const btnShowTime = document.getElementById("btnShowTime");

btnShowTime.addEventListener('click', showTime);