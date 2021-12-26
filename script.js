/** CONSTANTS */

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const color = document.getElementById('color');
const btn = document.querySelector('.btn');

/** FUNCTIONS */

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

console.log(hex.length);

const btnCallback = () => {
  let randomNumber = '#';

  for (let i = 0; i < 6; i++) {
    randomNumber += hex[getRandomNumber()];
  }

  color.textContent = randomNumber;
  document.body.style.backgroundColor = color.textContent;
};

/** EVENT LISTENERS */

btn.addEventListener('click', btnCallback);
