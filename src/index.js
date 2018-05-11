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

checkAnswerButton.addEventListener('click', () => {
  const questions = itemsApp.getQuestions();
  const currentQuestionId = Object.keys(questions)[currentQuestionIndex];
  const currentQuestion = itemsApp.question(currentQuestionId);

  console.log(currentQuestionId);
  console.log('attempted', currentQuestion.isAttempted());
  console.log('correct', currentQuestion.isValid());

  if (currentQuestion.isAttempted() && currentQuestion.isValid()) {
    toggleQuestionVisibility();

    setTimeout(() => {
      moveMarioToTile(++currentQuestionIndex);
      renderNextQuestion();
    }, 1000);

    setTimeout(() => {
      toggleQuestionVisibility();
    }, 2000);
  }
});
