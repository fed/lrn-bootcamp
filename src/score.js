import { gameOver } from './game-over';

const lives = document.getElementById('lives');
const score = document.getElementById('score');

export function loseOneLife() {
  const lastLifeIndicator = lives.lastElementChild;

  if (lastLifeIndicator) {
    lastLifeIndicator.remove();
  }

  const livesLeft = lives.childElementCount;

  if (livesLeft === 0) {
    gameOver();
  }
}

export function calculateScore() {
  const nextScore = Object.values(itemsApp.getScores()).reduce(
    (accumulator, current) => accumulator + (current.score || 0),
    0
  );

  score.textContent = nextScore.toString().padStart(5, '0');
}

export function renderStats() {
  const points = document.getElementById('report-points');
  const attempted = document.getElementById('report-questions-attempted');
  const wrongAnswers = document.getElementById('report-wrong-answers');

  points.textContent = document.getElementById('score').textContent;
  attempted.textContent = document.querySelector('.platforms').childElementCount;
  wrongAnswers.textContent = 3 - document.getElementById('lives').childElementCount;
}
