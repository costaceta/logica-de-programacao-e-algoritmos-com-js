
const btnAdicionar = document.getElementById('btnAdicionar');

let pacientes = [];

function adicionarCliente() {
  const inPaciente = document.getElementById('inPaciente');
  const paciente = inPaciente.value;
  const outLista = document.getElementById('outLista');

  if(paciente === '') {
    alert('Digite o nome do paciente');
    inPaciente.focus();
    return
  }

  pacientes.push(paciente);

  for (let index = 0; index < pacientes.length; index++) {
    outLista.innerHTML = pacientes.join('<br>');
  }

  inPaciente.value = ''
}

btnAdicionar.addEventListener('click', adicionarCliente);