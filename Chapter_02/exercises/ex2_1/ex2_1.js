function sale() {
  var $inDescription = document.getElementById('description');
  var $inPrice = document.getElementById('price');

  var $outAnswerTitle = document.getElementById('answerTitle');
  var $outAnswerSale = document.getElementById('answerSale');

  var description = $inDescription.value;
  var price = Number($inPrice.value);

  var total = Math.trunc(price) * 2;

  $outAnswerTitle.innerText = "Promoção de " + description;
  $outAnswerSale.innerText = "Leve 2 por apenas R$ " + total.toFixed(2);
}

var $btnSale = document.getElementById('btnSale');
$btnSale.addEventListener('click', sale);