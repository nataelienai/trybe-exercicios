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

const validation = new JustValidate('form', {
  rules: {
    name: {
      required: true,
      maxLength: 40,
    },
    email: {
      required: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    address: {
      required: true,
      maxLength: 200,
    },
    city: {
      required: true,
      maxLength: 28,
    },
    state: {
      required: true,
    },
    residence: {
      required: true,
    },
    summary: {
      required: true,
      maxLength: 1000,
    },
    jobTitle: {
      required: true,
      maxLength: 40,
    },
    jobDescription: {
      required: true,
      maxLength: 500,
    },
    date: {
      required: true,
    }
  },
  messages: {
    name: {
      required: 'Nome inválido!',
      maxLength: 'O nome deve ter no máximo 40 caracteres!',
    },
    email: {
      required: 'Email inválido!',
      maxLength:'O Email deve ter no máximo 50 caracteres!',
    },
    cpf: {
      required: 'CPF inválido!',
      maxLength:'O CPF deve ter no máximo 11 caracteres!',
    },
    address: {
      required: 'Endereço inválido!',
      maxLength:'O endereço deve ter no máximo 200 caracteres!',
    },
    city: {
      required: 'Cidade inválida!',
      maxLength:'A cidade deve ter no máximo 28 caracteres!',
    },
    state: {
      required: 'Estado inválido!',
    },
    residence: {
      required: 'Residência inválida!',
    },
    summary: {
      required: 'Resumo inválido!',
      maxLength:'O resumo deve ter no máximo 1000 caracteres!',
    },
    jobTitle: {
      required: 'Cargo inválido!',
      maxLength:'O cargo deve ter no máximo 40 caracteres!',
    },
    jobDescription: {
      required: 'Descrição inválida!',
      maxLength: 'A descrição deve ter no máximo 500 caracteres!',
    },
    date: {
      required: 'Data inválida!',
    }
  },
  focusWrongField: true,
  submitHandler: displayResume,
});

const startDateInput = document.getElementById('start-date-input');
startDateInput.DatePickerX.init({
  mondayFirst: false,
  format: 'dd/mm/yyyy'
});

function clearDisplay() {
  const resume = document.getElementById('resume');

  if (resume !== null) {
    resume.remove();
  }
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

function resetRegistration(event) {
  event.preventDefault();

  const form = document.querySelector('form');
  form.reset();
  clearDisplay();
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetRegistration);
