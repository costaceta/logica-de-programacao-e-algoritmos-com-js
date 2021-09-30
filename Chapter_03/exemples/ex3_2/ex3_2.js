const inName = document.getElementById('name');
const inPersonHeight = document.getElementById('personHeight');
const inSex = document.getElementsByName('personSex');

const outWeight = document.getElementById('outWeight');

function calcWeight() {
  let goodWeigth;
  let height = Number(inPersonHeight.value);
  let name = inName.value;

  inSex.forEach(sex => {
    if(sex.value == 'male' && sex.checked == true) {
      goodWeigth = 22 * Math.pow(height, 2);
    } else if(sex.value == 'female' && sex.checked == true) {
      goodWeigth = 21 * Math.pow(height, 2);
    }
  })

  outWeight.textContent = name + ": Seu peso ideal é " + goodWeigth.toFixed(3) + " kg";
}

function clearFields() {
  inPersonHeight.value = '';
  inName.value = '';
  outWeight.textContent = '';

  inSex.forEach(sex => {
    sex.checked = false;
  })
}

// Calc Weight
const btnCalcWeigth = document.getElementById('calcWeigth');
btnCalcWeigth.addEventListener('click', calcWeight);

// Clear fields
const clear = document.getElementById('clear');
clear.addEventListener('click', clearFields);