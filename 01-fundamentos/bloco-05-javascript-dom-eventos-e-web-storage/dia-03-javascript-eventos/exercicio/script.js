function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const decemberDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25];

function createDaysOfTheMonth() {
  const monthDaysList = document.querySelector('#days');
  
  for (let day of decemberDays) {
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = day;
    dayListItem.classList.add('day');
    
    if (holidays.includes(day)) {
      dayListItem.classList.add('holiday');
    }

    if (fridays.includes(day)) {
      dayListItem.classList.add('friday');
    }

    monthDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheMonth();

function createHolidaysButton(buttonText) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.innerHTML = buttonText;
  button.id = 'btn-holiday';
  
  buttonContainer.appendChild(button);
}

createHolidaysButton('Feriados');

function changeTheColorOfHolidays() {
  const holidayListItems = document.querySelectorAll('.holiday');

  if (holidayListItems[0].style.backgroundColor === '') {
    for (let holiday of holidayListItems) {
      holiday.style.backgroundColor = 'rgb(112, 217, 95)';
    }
  } else {
    for (let holiday of holidayListItems) {
      holiday.style.backgroundColor = '';
    }
  }
}

const holidayButton = document.getElementById('btn-holiday');
holidayButton.addEventListener('click', changeTheColorOfHolidays);

function createFridaysButton(buttonText) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.innerHTML = buttonText;
  button.id = 'btn-friday';
  
  buttonContainer.appendChild(button);
}

createFridaysButton('Sexta-feira');

function changeTheTextOfFridays() {
  const fridayListItems = document.querySelectorAll('.friday');

  if (fridayListItems[0].innerText === 'SEXTOU!!!') {
    for (let index = 0; index < fridayListItems.length; index += 1) {
      fridayListItems[index].innerText = fridays[index];
    }
  } else {
    for (let friday of fridayListItems) {
      friday.innerText = 'SEXTOU!!!';
    }
  }
}

const fridayButton = document.getElementById('btn-friday');
fridayButton.addEventListener('click', changeTheTextOfFridays);

function zoomIn(event) {
  event.target.style.fontSize = '2em';
}
function zoomOut(event) {
  event.target.style.fontSize = '';
}

for (let day of document.querySelectorAll('.day')) {
  day.addEventListener('mouseover', zoomIn);
  day.addEventListener('mouseleave', zoomOut);
}

function createCustomTask(taskName) {
  const myTasks = document.querySelector('.my-tasks');
  const task = document.createElement('span');
  task.innerHTML = taskName;

  myTasks.appendChild(task);
}

createCustomTask('cozinhar');

function addColoredTaskCaption(color) {
  const myTasks = document.querySelector('.my-tasks');
  const caption = document.createElement('div');
  caption.classList.add('task');
  caption.style.backgroundColor = color;

  myTasks.appendChild(caption);
}

addColoredTaskCaption('red');