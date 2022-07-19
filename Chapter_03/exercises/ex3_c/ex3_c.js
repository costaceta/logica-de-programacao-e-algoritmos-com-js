/**
 Elaborar um programa para simular um parquímetro,
 o qual leia o valor  de moedas depositado em um terminal de estacionamento rotativo.
 O  programa deve informar o tempo de permanência do veículo no local e o
  troco (se existir), como no exemplo da Figura 3.9. Se o valor for inferior ao
  tempo mínimo, exiba a mensagem: “Valor Insuficiente”. Considerar os
  valores/tempos da Tabela 3.6 (o máximo é 120 min).
 */

function calcTime() {
  var inValueToPay = document.getElementById('inValueToPay');

  var valueToPay = Number(inValueToPay.value);

  if(isNaN(valueToPay) || valueToPay === 0) {
    alert("Digite um número!");
    return;
  }

  var outTime = document.getElementById('outTime');
  var outTroco = document.getElementById('outTroco');
  var tempo, troco;

  if(valueToPay < 1) {
    alert("Valor Insuficiente");
    inValueToPay.focus();
    return;
  }

  if (valueToPay >= 3.00) {
    tempo = 120;
    troco = valueToPay - 3.00;
  } else if (valueToPay >= 1.75) {
    tempo = 60;
    troco = valueToPay - 1.75;
  } else {
    tempo = 30;
    troco = valueToPay - 1.00;
  }

  outTime.textContent = "Tempo: " + tempo.toFixed(2);
  outTroco.textContent = "Troco R$: " + troco.toFixed(2);
}

var btnConfirm = document.getElementById('confirm');

btnConfirm.addEventListener('click', calcTime);