function createStateOption(state) {
  let option = document.createElement('option');
  option.innerText = state.name;
  option.value = state.abbreviation;

  return option;
}

function generateStateOptions() {
  const stateInput = document.getElementById('state-input');
  const states = [
    {name: 'Acre', abbreviation: 'AC'},
    {name: 'Alagoas', abbreviation: 'AL'},
    {name: 'Amapá', abbreviation: 'AP'},
    {name: 'Amazonas', abbreviation: 'AM'},
    {name: 'Bahia', abbreviation: 'BA'},
    {name: 'Ceará', abbreviation: 'CE'},
    {name: 'Espírito Santo', abbreviation: 'ES'},
    {name: 'Goiás', abbreviation: 'GO'},
    {name: 'Maranhão', abbreviation: 'MA'},
    {name: 'Mato Grosso', abbreviation: 'MT'},
    {name: 'Mato Grosso do Sul', abbreviation: 'MS'},
    {name: 'Minas Gerais', abbreviation: 'MG'},
    {name: 'Pará', abbreviation: 'PA'},
    {name: 'Paraíba', abbreviation: 'PB'},
    {name: 'Paraná', abbreviation: 'PR'},
    {name: 'Pernambuco', abbreviation: 'PE'},
    {name: 'Piauí', abbreviation: 'PI'},
    {name: 'Rio de Janeiro', abbreviation: 'RJ'},
    {name: 'Rio Grande de Norte', abbreviation: 'RN'},
    {name: 'Rio Grande do Sul', abbreviation: 'RS'},
    {name: 'Rondônia', abbreviation: 'RO'},
    {name: 'Roraima', abbreviation: 'RR'},
    {name: 'Santa Catarina', abbreviation: 'SC'},
    {name: 'São Paulo', abbreviation: 'SP'},
    {name: 'Sergipe', abbreviation: 'SE'},
    {name: 'Tocantins', abbreviation: 'TO'},
    {name: 'Distrito Federal', abbreviation: 'DF'},
  ];

  for (let index = 0; index < states.length; index++) {
    stateInput.appendChild(createStateOption(states[index]));
  }
}

window.onload = generateStateOptions;

function getDateFromString(date) {
  const units = date.split('/');
  if (units.length !== 3) {
    return null;
  }

  if (units[0].length === 0 || units[1].length === 0
    || units[2].length === 0) {
    return null;
  }

  return {
    day: Number(units[0]),
    month: Number(units[1]),
    year: Number(units[2]),
  };
}

function isStartDateValid(event) {
  const startDateInput = document.getElementById('start-date-input');
  const date = getDateFromString(startDateInput.value);

  if (date === null) {
    window.alert('ERRO: O formato da data de início é inválido!');
    event.preventDefault();
    return;
  }
  if (date.day < 1 || date.day > 31) {
    window.alert('ERRO: O dia da data de início é inválido!');
    event.preventDefault();
    return;
  }
  if (date.month < 1 || date.month > 12) {
    window.alert('ERRO: O mês da data de início é inválido!');
    event.preventDefault();
    return;
  }
  if (date.year < 0) {
    window.alert('ERRO: O ano não pode ser negativo!');
    event.preventDefault();
    return;
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', isStartDateValid);
