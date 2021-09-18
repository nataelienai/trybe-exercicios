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

function validateTextInput(id, maxLength, isRequired) {
  const input = document.getElementById(id);

  if (isRequired && input.value.length === 0 || input.value.length > maxLength) {
    return false;
  }
  return true;
}

function validateStateOption() {
  const stateInput = document.getElementById('state-input');

  return stateInput.value.length > 0;
}

function validateResidenceInput() {
  const apInput = document.getElementById('apartment-input');
  const houseInput = document.getElementById('house-input');

  return apInput.value.length > 0 || houseInput.value.length > 0;
}

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

function validateStartDate() {
  const startDateInput = document.getElementById('start-date-input');
  const date = getDateFromString(startDateInput.value);

  if (date === null) {
    return {result: false, detail: 'ERRO: O formato da data de início é inválido!'};
  }
  if (!(date.day > 0 && date.day <= 31)) {
    return {result: false, detail: 'ERRO: O dia da data de início é inválido!'};
  }
  if (!(date.month > 0 && date.month <= 12)) {
    return {result: false, detail: 'ERRO: O mês da data de início é inválido!'};
  }
  if (!(date.year >= 0)) {
    return {result: false, detail: 'ERRO: O ano da data de início é inválido!'};
  }
  return {result: true};
}

function validateForm() {
  const inputValidations = [
    validateTextInput('name-input', 40, true),
    validateTextInput('email-input', 50, true),
    validateTextInput('cpf-input', 11, true),
    validateTextInput('address-input', 200, true),
    validateTextInput('city-input', 28, true),
    validateStateOption(),
    validateResidenceInput(),
    validateTextInput('summary-input', 1000, true),
    validateTextInput('job-title-input', 40, true),
    validateTextInput('job-description-input', 500, true),
  ];
  const dateValidation = validateStartDate();

  if (inputValidations.indexOf(false) >= 0) {
    return {result: false, detail: 'ERRO: Dados inválidos!'};
  }
  if (dateValidation.result === false) {
    return {result: false, detail: dateValidation.detail};
  }
  return {result: true};
}

function registerResume(event) {
  event.preventDefault();

  const formValidation = validateForm();
  if (formValidation.result === false) {
    window.alert(formValidation.detail);
  } else {
    window.alert('Dados cadastrados com sucesso!');
  }
}

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', registerResume);
