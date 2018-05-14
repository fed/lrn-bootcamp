import { openLavaGates } from './lava';
import { renderNextQuestion, isLastQuestion } from './question';
import { loseOneLife, calculateScore, renderStats } from './score';
import { moveMarioToTile } from './mario';
import {
  showQuestion,
  hideQuestion,
  hideSplash,
  showGameOver,
  showWrongAnswer,
  hideWrongAnswer,
  showYouWinMessage
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
      calculateScore();

      if (isLastQuestion()) {
        // You've answered all questions correctly!
        showYouWinMessage();
        renderStats();
      } else {
        setTimeout(() => {
          moveMarioToTile(++currentQuestionIndex);
          renderNextQuestion();
        }, 750);

        setTimeout(() => {
          showQuestion();
        }, 1250);
      }
    }

    if (!currentQuestion.isValid()) {
      loseOneLife();
      showWrongAnswer();
    }
  });
}
