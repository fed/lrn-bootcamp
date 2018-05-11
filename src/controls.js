import { openLavaGates } from './lava';
import { renderNextQuestion } from './question';
import { loseOneLife } from './score';
import { moveMarioToTile } from './mario';
import {
  showQuestion,
  hideQuestion,
  hideSplash,
  showGameOver,
  showWrongAnswer,
  hideWrongAnswer
} from './toggle-visibility';

export function initControls() {
  const startButton = document.getElementById('start-button');
  const checkAnswerButton = document.getElementById('check-answer');
  let currentQuestionIndex = 0;

  startButton.addEventListener('click', () => {
    hideSplash();
    showQuestion();
    openLavaGates();
  });

  checkAnswerButton.addEventListener('click', () => {
    const questions = itemsApp.getQuestions();
    const currentQuestionId = Object.keys(questions)[currentQuestionIndex];
    const currentQuestion = itemsApp.question(currentQuestionId);

    hideWrongAnswer();

    if (currentQuestion.isAttempted() && currentQuestion.isValid()) {
      hideQuestion();

      setTimeout(() => {
        moveMarioToTile(++currentQuestionIndex);
        renderNextQuestion();
      }, 750);

      setTimeout(() => {
        showQuestion();
      }, 1250);
    }

    if (!currentQuestion.isValid()) {
      loseOneLife();
      showWrongAnswer();
    }
  });
}
