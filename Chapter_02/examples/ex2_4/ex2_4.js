function calcTotalPrice() {
  var $inBuffet = document.getElementById('inBuffet');
  var $inConsumption = document.getElementById('inConsumption');
  var $outPrice = document.getElementById('outPrice');

  var buffet = Number($inBuffet.value);
  var consumption = Number($inConsumption.value);

  var totalPrice = (consumption * buffet) / 1000;

  $outPrice.textContent = "Valor a pagar em R$: " + totalPrice.toFixed(2);
}

var $btnCalcPrice = document.getElementById('btnCalcPrice');

$btnCalcPrice.addEventListener('click', calcTotalPrice);