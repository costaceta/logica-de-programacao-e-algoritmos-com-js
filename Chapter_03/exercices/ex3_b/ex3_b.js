/**
  Elaborar um programa que leia a velocidade permitida em uma estrada e
  a velocidade de um condutor. Se a velocidade for inferior ou igual à
  permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a
  permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da
  velocidade permitida, exiba “Multa Grave”
 */

function verifySpeed() {
  var inAllowedSpeed = document.getElementById('inAllowedSpeed');
  var inAtualSpeed = document.getElementById('inAtualSpeed');

  var allowedSpeed = Number(inAllowedSpeed.value);
  var atualSpeed = Number(inAtualSpeed.value);

  if(allowedSpeed == 0 || isNaN(allowedSpeed)) {
    alert("Digite o valor da velocidade permitida.");
    inAllowedSpeed.focus();
    return;
  }

  if(atualSpeed == 0 || isNaN(atualSpeed)) {
    alert("Digite o valor da velocidade do condutor.");
    inAtualSpeed.focus();
    return;
  }

  const allowedSpeedPlus20percent = allowedSpeed + (allowedSpeed * 0.2);

  if(atualSpeed <= allowedSpeed) {
    outResult.textContent = "Sem multa";
  } else if(atualSpeed <= allowedSpeedPlus20percent) {
    console.log(allowedSpeedPlus20percent);
    outResult.textContent = "Multa leve";
  } else if(atualSpeed > allowedSpeedPlus20percent) {
    outResult.textContent = "Multa grave";
  }

}

var btnVerifySpeed = document.getElementById('verifySpeed');

btnVerifySpeed.addEventListener('click', verifySpeed);