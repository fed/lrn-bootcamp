import { initControls } from './controls';
import { enableAudioSupport } from './audio';
import { openLavaGates, getLavaLevel } from './lava';
import { renderTiles } from './tiles';
import { moveMarioToTile } from './mario';

// Game state.
let coins = 0;
let livesLeft = 3;
let currentTileIndex = 0;

// Game initialisation logic.
initControls();
enableAudioSupport();
renderTiles();
moveMarioToTile(0);
