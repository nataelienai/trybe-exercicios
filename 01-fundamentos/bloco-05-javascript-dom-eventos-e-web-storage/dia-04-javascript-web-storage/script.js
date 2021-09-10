/* Function that changes the background color */
function changeBgColor(event) {
  localStorage.setItem('bgColor', event.target.value);
  document.body.style.backgroundColor = event.target.value;
}

/* Function that changes the text color */
function changeTextColor(event) {
  localStorage.setItem('color', event.target.value);
  document.body.style.color = event.target.value;
}

/* Function that sets the page font size in pixels */
function setFontSize() {
  const fontSizeInput = document.getElementById('font-size-input');
  let fontSize = fontSizeInput.value + 'px';

  localStorage.setItem('fontSize', fontSize);
  document.body.style.fontSize = fontSize;
}

/* Function that sets the text line height in pixels*/
function setLineHeight() {
  const lineHeightInput = document.getElementById('line-height-input');
  let lineHeight = lineHeightInput.value + 'px';
  
  localStorage.setItem('lineHeight', lineHeight);
  document.body.style.lineHeight = lineHeight;
}

/* Function that sets the page font family */
function setFontFamily(event) {
  localStorage.setItem('fontFamily', event.target.value);
  document.body.style.fontFamily = event.target.value;
}

/* Function that initializes all the event listeners */
function initEventListeners() {
  const bgColorInput = document.getElementById('bg-color-input');
  bgColorInput.addEventListener('input', changeBgColor);

  const textColorInput = document.getElementById('text-color-input');
  textColorInput.addEventListener('input', changeTextColor);

  const fontSizeButton = document.getElementById('font-size-btn');
  fontSizeButton.addEventListener('click', setFontSize);

  const lineHeightButton = document.getElementById('line-height-btn');
  lineHeightButton.addEventListener('click', setLineHeight);

  const fontFamilyButtons = document.querySelectorAll('.font-family-btn');
  for (let button of fontFamilyButtons) {
    button.addEventListener('click', setFontFamily);
  }
}

/* Function that reads local storage and sets the page style based on read values */
function initRenderization() {
  if (localStorage.length > 0) {
    const bgColorInput = document.getElementById('bg-color-input');
    bgColorInput.value = localStorage.getItem('bgColor');

    const textColorInput = document.getElementById('text-color-input');
    textColorInput.value = localStorage.getItem('color');

    document.body.style.backgroundColor = bgColorInput.value;
    document.body.style.color = textColorInput.value;
    document.body.style.fontSize = localStorage.getItem('fontSize');
    document.body.style.lineHeight = localStorage.getItem('lineHeight');
    document.body.style.fontFamily = localStorage.getItem('fontFamily');
  }
  initEventListeners();
}

window.onload = initRenderization;