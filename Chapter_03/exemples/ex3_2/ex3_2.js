
function calcWeight() {
  // Cria ferência dos elementos
  const inName = document.getElementById('name');
  const inPersonHeight = document.getElementById('personHeight');
  const inMale = document.getElementById('male');
  const inFemale = document.getElementById('female');
  const outWeight = document.getElementById('outWeight');

  // Obtem o conteúdo dos campos
  let name = inName.value;
  let height = Number(inPersonHeight.value);
  let male = inMale.checked;
  let female = inFemale.checked;
  let weight = 0;

  // Validate fields
  if(name == "" || (male == false && female == false)) {
    alert("Por favor, informe o nome e selecione o sexo...");
    inName.focus();
    return;
  }

  if(height == 0 || isNaN(height)) {
    alert("Por favor, informe a altura corretamente!");
    inPersonHeight.focus();
    return;
  }

  // Calc Weight
  if(male) {
    weight = 22 * Math.pow(height, 2);
  } else {
    weight = 21 * Math.pow(height, 2);
  }

  outWeight.textContent = name + ": Seu peso ideal é " + weight.toFixed(3) + " kg";
}

function clearFields() {
  document.getElementById('name').value = '';
  document.getElementById('personHeight').value = '';
  document.getElementById('male').checked = false;
  document.getElementById('female').checked = false;
  document.getElementById('outWeight').textContent = '';

  document.getElementById('name').focus();
}

// Calc Weight
const btnCalcWeigth = document.getElementById('calcWeigth');
btnCalcWeigth.addEventListener('click', calcWeight);

// Clear fields
const clear = document.getElementById('clear');
clear.addEventListener('click', clearFields);