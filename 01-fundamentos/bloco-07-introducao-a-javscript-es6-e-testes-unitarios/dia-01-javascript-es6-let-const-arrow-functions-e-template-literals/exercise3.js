let clickCount = 0;

const countField = document.getElementById('count');
countField.innerText = clickCount;

const clickCountButton = document.getElementById('click-count-btn');
clickCountButton.addEventListener('click', () => {
  clickCount += 1;
  countField.innerText = clickCount;
});
