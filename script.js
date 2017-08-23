const button = document.querySelector('.show-hidden-div');
const fixedDiv = document.querySelector('#off-screen');
const exitButton = document.querySelector('#exit-button');

button.addEventListener('click', () => {
  fixedDiv.style.left = '50%';
})

exitButton.addEventListener('click', () => {
  fixedDiv.style.left = '100%';
})
