
const inPaciente = document.getElementById('inPaciente');
const paciente = inPaciente.value;

const outLista = document.getElementById('outLista');
const outAtendimento = document.getElementById('outAtendimento');

const btnAdicionar = document.getElementById('btnAdicionar');
const btnUrgencia = document.getElementById('btnUrgencia');
const btnAtender = document.getElementById('btnAtender');

let pacientes = [];

function atenderPaciente() {
  if(pacientes.length === 0) {
    alert('Fila de atendimento está vazia!');
    inPaciente.focus();
    return
  }

  outAtendimento.innerHTML = pacientes[0];
  pacientes.shift();

  for (let index = 0; index < pacientes.length; index++) {
    outLista.innerHTML = pacientes.join('<br>');
  }

}

function urgenciaPaciente() {
  if(inPaciente.value === '') {
    alert('Digite o nome do paciente');
    inPaciente.focus();
    return
  }

  pacientes.unshift(inPaciente.value);

  for (let index = 0; index < pacientes.length; index++) {
    outLista.innerHTML = pacientes.join('<br>');
  }

  inPaciente.value = ''
  inPaciente.focus()
}

function adicionarPaciente() {

  if(inPaciente.value === '') {
    alert('Digite o nome do paciente');
    inPaciente.focus();
    return
  }

  pacientes.push(inPaciente.value);

  for (let index = 0; index < pacientes.length; index++) {
    outLista.innerHTML = pacientes.join('<br>');
  }

  inPaciente.value = ''
  inPaciente.focus()
}

btnAdicionar.addEventListener('click', adicionarPaciente);
btnUrgencia.addEventListener('click', urgenciaPaciente);
btnAtender.addEventListener('click', atenderPaciente);