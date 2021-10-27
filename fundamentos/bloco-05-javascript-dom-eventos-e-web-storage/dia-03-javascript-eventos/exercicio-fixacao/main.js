const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function changeSelectedElement(event) {
  let currentSelectedElement = document.querySelector('.tech');
  currentSelectedElement.classList.remove('tech');

  let newSelectedElement = event.target;
  newSelectedElement.classList.add('tech');
}

firstLi.addEventListener('click', changeSelectedElement);
secondLi.addEventListener('click', changeSelectedElement);
thirdLi.addEventListener('click', changeSelectedElement);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeSelectedElementText() {
  let selectedElement = document.querySelector('.tech');
  selectedElement.innerText = input.value;
}

input.addEventListener('keyup', changeSelectedElementText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
let topSectionTitle = document.getElementById('my-spotrybefy');

function redirectToAnotherPage() {
  window.location.href = 'https://nataelienai.github.io/';
}

topSectionTitle.addEventListener('dblclick', redirectToAnotherPage);


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeSectionTitleColor(event) {
  event.target.style.color = 'yellow';
}

function resetSectionTitleColor(event) {
  event.target.style.color = 'white';
}

topSectionTitle.addEventListener('mouseover', changeSectionTitleColor);
topSectionTitle.addEventListener('mouseleave', resetSectionTitleColor);
