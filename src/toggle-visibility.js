const gameOverMessage = document.querySelector('.game-over');
const speechBubble = document.querySelector('.speech-bubble');
const warningIndicator = document.querySelector('.warning');
const question = document.querySelector('.question');
const splashScreen = document.querySelector('.splash');
const wrongAnswerIndicator = document.getElementById('wrong-answer');

export function showGameOver() {
  gameOverMessage.classList.add('visible');
  speechBubble.classList.add('visible');
}

export function hideGameOver() {
  gameOverMessage.classList.remove('visible');
  speechBubble.classList.remove('visible');
}

export function showWarning() {
  warningIndicator.classList.add('visible');
}

export function hideWarning() {
  warningIndicator.classList.remove('visible');
}

export function showQuestion() {
  question.classList.add('visible');
}

export function hideQuestion() {
  question.classList.remove('visible');
}

export function hideSplash() {
  splashScreen.classList.remove('visible');
}

export function showWrongAnswer() {
  wrongAnswerIndicator.classList.add('visible');
}

export function hideWrongAnswer() {
  wrongAnswerIndicator.classList.remove('visible');
}
