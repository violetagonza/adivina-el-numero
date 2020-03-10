// Genera número aleatiorio al arrancar la página y lo muestra en consola
function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}
let randomNumber = getRandomNumber();
console.log(`Mi número aleatorio es ${randomNumber}`);

// Recoge button e input
const button = document.querySelector('.button');
const getInput = document.querySelector('input');

// Recoge input y lo muestra en consola
function handleInput() {
  event.preventDefault();
  console.log(`Mi número de prueba es ${getInput.value}`);
}

// Recoge pista
const getClueText = document.querySelector('.clue');
console.log(getClueText);

// Compara números
function compareNumbers() {
  debugger;
  if (parseInt(getInput.value) > 100 || parseInt(getInput.value) < 1) {
    getClueText.innerHTML = 'El número debe estar entre 1 y 100';
  } else if (parseInt(getInput.value) === randomNumber) {
    getClueText.innerHTML = 'Has ganado campeona!!!';
  } else if (getInput.value > randomNumber) {
    getClueText.innerHTML = 'Demasiado alto';
  } else if (getInput.value < randomNumber) {
    getClueText.innerHTML = 'Demasiado bajo';
  }
}
function handleButton() {
  event.preventDefault();
  handleInput();
  compareNumbers();
}

// Escucha button
button.addEventListener('click', handleButton);
