'use strict';
import './styles.css';
/* 
const message = document.querySelector('.message'),
  number = document.querySelector('.number'),
  score = document.querySelector('.score'),
  guess = document.querySelector('.guess');

console.log(message.textContent);

message.textContent = 'Correct Number!!';
number.textContent = 13;
score.textContent = 10;
guess.value = 23;
console.log(guess.value); 
*/

// -------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/** Events:Para poder escuchar eventos, primero debemos seleccionar el elemento donde debe ocurrir el evento.
 * ES el motor de JS el que llamara a la f(x) / callback cuando se dispare el evento que esta escuchando.
 */
/* 
const message = document.querySelector('.message'),
  number = document.querySelector('.number'),
  score = document.querySelector('.score'),
  check = document.querySelector('.check'),
  bodyWin = document.querySelector('body'),
  input = document.getElementById('input'),
  highscoreL = document.querySelector('.highscore'),
  again = document.querySelector('.again'),
  guess = document.querySelector('.guess');

let secretNumber = Math.trunc(Math.random() * 20) + 1,
  scoreJs = 20,
  highscore = 0;

score.textContent = scoreJs;
console.log(secretNumber);

check.onclick = () => {
  const guessValue = Number(guess.value);

  // When there is no input
  if (!guessValue) {
    message.textContent = '⛔️ No number!!';

    //When player wins
  } else if (guessValue === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    bodyWin.classList.add('body-win');
    number.textContent = secretNumber;

    number.style.width = '30rem';

    if (scoreJs > highscore) {
      highscore = scoreJs;
      highscoreL.textContent = highscore;
    }

    // When guess is too high
  } else if (guessValue > secretNumber) {
    if (scoreJs > 1) {
      scoreJs--;
      message.textContent = '📈 Too high!';
      score.textContent = scoreJs;
    } else {
      message.textContent = '💥 You lost the game!';
      score.textContent = 0;
    }

    // When guess is too low
  } else if (guessValue < secretNumber) {
    if (scoreJs > 0) {
      scoreJs--;
      message.textContent = '📉 Too low!';
      score.textContent = scoreJs;
    } else {
      message.textContent = '💥 You lost the game!';
      score.textContent = 0;
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
  score.textContent = scoreJs;
  bodyWin.classList.remove('body-win');
  guess.value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = '?';
  number.style.width = '15rem';
  console.log(secretNumber);
};
*/

// -------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////
/** Refactoring
 *
 */

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
  scoreJs = 5,
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
console.log(secretNumber);

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

  // // // Teniendo 2 f(x) iguales, solo cambia mensaje: high/low:
  //   else {
  //     guessValue === secretNumber
  //       ? playerWins()
  //       : guessValue > secretNumber && scoreJs > 1
  //       ? tooHigh()
  //       : guessValue < secretNumber && scoreJs > 1
  //       ? tooLow()
  //       : lostGame();
  //   }

  //   console.log(scoreJs);
};

input.addEventListener('keyup', e => {
  if (e.keyCode === 13 && input.value.length >= 0) {
    check.click();
  }
});

again.onclick = () => {
  scoreJs = 5;
  printScore(scoreJs);
  bodyWin.classList.remove('body-win');
  guess.value = '';
  createSecretNum();

  number.textContent = '?';
  number.style.width = '15rem';
  console.log(secretNumber);

  btnCheck.disabled = false;
};
