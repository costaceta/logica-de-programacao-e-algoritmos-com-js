
function convertDuration() {
  var inTitle = document.getElementById('inTitle');
  var inDuration = document.getElementById('inDuration');
  var outTitle = document.getElementById('outTitle');
  var outAnswer = document.getElementById('outAnswer');

  var title = inTitle.value;
  var duration = Number(inDuration.value);

  var hours = Math.floor(duration / 60);
  var minutes = duration % 60;

  outTitle.innerHTML = title;
  outAnswer.innerHTML = hours + ' hora(s) ' + minutes + ' minuto(s)';
}

var btnConvert = document.getElementById('btnConvert');

btnConvert.addEventListener('click', convertDuration);