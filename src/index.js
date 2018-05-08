import { initControls } from './controls';
import { enableAudioSupport } from './audio';
import { openLavaGates, getLavaLevel } from './lava';

(function() {
  console.log('INIT');

  // Selectors.

  // Game state.
  let coins = 0;
  let livesLeft = 3;
  let currentTileIndex = 0;

  // Game initialisation logic.
  openLavaGates();
  initControls();
  enableAudioSupport();
})();
