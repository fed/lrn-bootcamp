import { showGameOver, hideQuestion } from './toggle-visibility';
import { setMarioOnFire } from './mario';

export function gameOver() {
  hideQuestion();
  showGameOver();
  setMarioOnFire();
}
