function totalTopay() {
  var inVehicle = document.getElementById('inVehicle');
  var inPrice = document.getElementById('inPrice');

  var outVehicle = document.getElementById('outVehicle');
  var outEntry = document.getElementById('outEntry');
  var outParcel = document.getElementById('outParcel');

  var vehicle = inVehicle.value;
  var price = Number(inPrice.value);

  var entry = price / 2;
  var parcel = (price - entry) / 12;

  outVehicle.innerHTML = "Promoção 2021: " + vehicle;
  outEntry.innerHTML = "Entrada de: R$" + entry.toFixed(2);
  outParcel.innerHTML = "Parcela 12 x de R$: " + parcel.toFixed(2);

}

var btnSeePromotion = document.getElementById('btnSeePromotion');
btnSeePromotion.addEventListener('click', totalTopay);