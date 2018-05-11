import { getMarioPosition } from './mario';
import { showQuestion, hideQuestion } from './toggle-visibility';
import { gameOver } from './game-over';

// Get lava level (in pixels, from the bottom of the screen).
function getLavaHeight() {
  const lava = document.querySelector('.lava');

  return Number(window.getComputedStyle(lava)['height'].slice(0, -2));
}

// Get the lava's vertical position from the very top of the screen.
export function getLavaPosition() {
  const lava = document.querySelector('.lava');

  return lava.getBoundingClientRect().top;
}

// Lava rising level management.
export function openLavaGates() {
  const lava = document.querySelector('.lava');
  const lavaLevelRisingInterval = 1000; // in milliseconds.
  const maxLavaHeight = 653; // in pixels.
  const risingLavaInterval = setInterval(() => {
    const currentLavaHeight = getLavaHeight();
    const nextLavaHeight = currentLavaHeight + 25; // Increment the lava height in 25px.

    if (nextLavaHeight <= maxLavaHeight) {
      const lavaHasReachedMario = getLavaPosition() + 46 <= getMarioPosition();

      lava.style.height = `${nextLavaHeight}px`;

      if (lavaHasReachedMario) {
        gameOver();
        clearInterval(risingLavaInterval);
      }
    }
  }, lavaLevelRisingInterval);
}
