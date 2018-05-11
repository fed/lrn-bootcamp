import { toggleQuestionVisibility, setQuestionTitle } from './question';
import { openLavaGates } from './lava';

export function initControls() {
  const startButton = document.querySelector('.splash__start-button');

  startButton.addEventListener('click', () => {
    toggleSplashVisibility();
    toggleQuestionVisibility();
    openLavaGates();
  });
}

export function toggleSplashVisibility() {
  const splashScreen = document.querySelector('.splash');

  splashScreen.classList.remove('splash--visible');
}
