const states = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande de Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
  'Distrito Federal',
];

function createStateOption(stateName) {
  let option = document.createElement('option');
  option.innerText = stateName;
  option.value = stateName;

  return option;
}

function generateStateOptions() {
  const stateInput = document.getElementById('state-input');

  for (let index = 0; index < states.length; index++) {
    stateInput.appendChild(createStateOption(states[index]));
  }
}

window.onload = generateStateOptions;

function validateInput(id, maxLength, isRequired, isRadio) {
  const input = document.getElementById(id);

  if (isRadio && !input.checked) {
    return false;
  }
  if (isRequired && input.value.length === 0 || input.value.length > maxLength) {
    return false;
  }
  return true;
}

function validateForm() {
  const inputValidations = [
    validateInput('name-input', 40, true, false),
    validateInput('email-input', 50, true, false),
    validateInput('cpf-input', 11, true, false),
    validateInput('address-input', 200, true, false),
    validateInput('city-input', 28, true, false),
    validateInput('state-input', Infinity, true, false),
    validateInput('house-input', Infinity, true, true)
    || validateInput('apartment-input', Infinity, true, true),
    validateInput('summary-input', 1000, true, false),
    validateInput('job-title-input', 40, true, false),
    validateInput('job-description-input', 500, true, false),
  ];

  if (inputValidations.indexOf(false) >= 0) {
    return {result: false, detail: 'ERRO: Dados inválidos!'};
  }
  return {result: true};
}

function clearDisplay() {
  const errorMessage = document.getElementById('error-message');
  const resume = document.getElementById('resume');

  if (errorMessage !== null) {
    errorMessage.remove();
  }
  if (resume !== null) {
    resume.remove();
  }
}

function displayError(msg) {
  const main = document.querySelector('main');
  const errorMessage = document.createElement('div');

  errorMessage.id = 'error-message';
  errorMessage.innerText = msg;

  main.appendChild(errorMessage);
}

function createChild(tagName, className, innerText, container) {
  const child = document.createElement(tagName);
  child.className = className;
  child.innerText = innerText;
  container.appendChild(child);
}

function displayInputField(container, label, id) {
  const input = document.getElementById(id);
  const field = document.createElement('div');
  field.className = 'data-field';

  createChild('div', 'data-label', label, field);
  createChild('div', 'data-value', input.value, field);

  container.appendChild(field);
}

function getCheckedRadioInputId(radioInputIds) {
  for (let id of radioInputIds) {
    const input = document.getElementById(id);
    if (input.checked) {
      return input.id
    }
  }
}

function displayResume() {
  const main = document.querySelector('main');
  const resume = document.createElement('div');
  const fields = [
    {label: 'Nome', id: 'name-input'},
    {label: 'Email', id: 'email-input'},
    {label: 'CPF', id: 'cpf-input'},
    {label: 'Endereço', id: 'address-input'},
    {label: 'Cidade', id: 'city-input'},
    {label: 'Estado', id: 'state-input'},
    {
      label: 'Tipo de residência',
      id: getCheckedRadioInputId(['apartment-input', 'house-input'])
    },
    {label: 'Resumo', id: 'summary-input'},
    {label: 'Cargo', id: 'job-title-input'},
    {label: 'Descrição do cargo', id: 'job-description-input'},
    {label: 'Data de início', id: 'start-date-input'},
  ];

  for (let index = 0; index < fields.length; index++) {
    displayInputField(resume, fields[index].label, fields[index].id)
  }
  resume.id = 'resume';
  main.appendChild(resume);
}

function registerResume(event) {
  event.preventDefault();
  clearDisplay();

  const formValidation = validateForm();
  if (formValidation.result === false) {
    displayError(formValidation.detail);
  } else {
    displayResume();
  }
}

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', registerResume);

function resetRegistration(event) {
  event.preventDefault();

  const form = document.querySelector('form');
  form.reset();
  clearDisplay();
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetRegistration);
