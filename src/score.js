import leftPad from 'left-pad';
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

function calculateScore() {
  const nextScore = coins + itemsApp.question('id').getScore().score;

  leftPad(nextScore, 5, 0);
}
