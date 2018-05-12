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
