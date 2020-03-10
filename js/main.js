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

// Compara números
function compareNumbers() {
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

//Recoge counter y counter-message
const getCounterMessage = document.querySelector('.count-message');
const getCounter = document.querySelector('.counter');
getCounterNumber = parseInt(getCounter.innerHTML);

//Suma 1 a el número de intentos
let counterNumber = 0;
function sumCounterNumber() {
  counterNumber = counterNumber + 1;
  getCounterMessage.innerHTML = `Número de intentos: ${counterNumber}`;
}

// Escucha el botón y ejecuta las funciones de recoger value del input, comparar los números y pintar la pista
function handleButton() {
  event.preventDefault();
  handleInput();
  compareNumbers();
  debugger;
  sumCounterNumber();
}

// Escucha button
button.addEventListener('click', handleButton);
