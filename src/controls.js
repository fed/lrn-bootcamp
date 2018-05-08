import { toggleModalVisibility } from './modal';

export function initControls() {
  const startButton = document.querySelector('.splash__start-button');
  const splashScreen = document.querySelector('.splash');

  startButton.addEventListener('click', () => {
    splashScreen.classList.remove('splash--visible');
    toggleModalVisibility();
  });
}
