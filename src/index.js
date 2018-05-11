import { initControls } from './controls';
import { enableAudioSupport } from './audio';
import { openLavaGates } from './lava';
import { renderTiles } from './tiles';
import { moveMarioToTile } from './mario';
import { toggleQuestionVisibility, renderNextQuestion } from './question';

// Game state.
let coins = 0;
let livesLeft = 3;
let currentQuestionIndex = 0;

// Game initialisation logic.
initControls();
enableAudioSupport();
renderTiles();
moveMarioToTile(0);

const checkAnswerButton = document.getElementById('check-answer');
const wrongAnswerIndicator = document.getElementById('wrong-answer');

checkAnswerButton.addEventListener('click', () => {
  const questions = itemsApp.getQuestions();
  const currentQuestionId = Object.keys(questions)[currentQuestionIndex];
  const currentQuestion = itemsApp.question(currentQuestionId);

  if (wrongAnswerIndicator.classList.contains('question__wrong-answer--visible')) {
    wrongAnswerIndicator.classList.remove('question__wrong-answer--visible');
  }

  if (currentQuestion.isAttempted() && currentQuestion.isValid()) {
    toggleQuestionVisibility();

    setTimeout(() => {
      moveMarioToTile(++currentQuestionIndex);
      renderNextQuestion();
    }, 1000);

    setTimeout(() => {
      toggleQuestionVisibility();
    }, 1500);
  }

  if (!currentQuestion.isValid()) {
    wrongAnswerIndicator.classList.add('question__wrong-answer--visible');
  }
});
