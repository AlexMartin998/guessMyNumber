'use strict';
import './styles.css';

const message = document.querySelector('.message'),
  number = document.querySelector('.number'),
  score = document.querySelector('.score'),
  check = document.querySelector('.check'),
  bodyWin = document.querySelector('body'),
  input = document.getElementById('input'),
  highscoreL = document.querySelector('.highscore'),
  again = document.querySelector('.again'),
  btnCheck = document.getElementById('btn-check'),
  guess = document.querySelector('.guess');

let secretNumber = 0,
  scoreJs = 20,
  highscore = 0;

score.textContent = scoreJs;

const createSecretNum = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

const printMessage = mssg => {
  message.textContent = mssg;
};

const printScore = scoreJs => {
  score.textContent = scoreJs;
};

const result = message => {
  scoreJs--;
  printMessage(message);
  printScore(scoreJs);
};

const highscoreFx = () => {
  if (scoreJs > highscore) {
    highscore = scoreJs;
    highscoreL.textContent = highscore;
  }
};

const playerWins = () => {
  printMessage('🎉 Correct Number!');
  bodyWin.classList.add('body-win');
  number.textContent = secretNumber;

  number.style.width = '30rem';
  highscoreFx();

  btnCheck.disabled = true;
};

const lostGame = () => {
  printMessage('💥 You lost the game!');
  score.textContent = 0;
  btnCheck.disabled = true;
};

createSecretNum();

check.onclick = () => {
  const guessValue = Number(guess.value);

  // When there is no input
  if (!guessValue) {
    printMessage('⛔️ No number!!');
  } else if (guessValue === secretNumber) {
    playerWins();
  } else if (guessValue !== secretNumber) {
    if (scoreJs > 1) {
      result(guessValue > secretNumber ? '📈 Too high!' : '📉 Too low!');
    } else {
      lostGame();
    }
  }
};

input.addEventListener('keyup', e => {
  if (e.keyCode === 13 && input.value.length >= 0) {
    check.click();
  }
});

again.onclick = () => {
  scoreJs = 20;
  printScore(scoreJs);
  bodyWin.classList.remove('body-win');
  guess.value = '';
  createSecretNum();

  number.textContent = '?';
  number.style.width = '15rem';

  btnCheck.disabled = false;
};
