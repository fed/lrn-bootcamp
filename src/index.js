import { initControls } from './controls';
import { enableAudioSupport } from './audio';
import { renderTiles } from './tiles';
import { moveMarioToTile } from './mario';

// Game initialisation logic.
initControls();
enableAudioSupport();
renderTiles();
moveMarioToTile(0);
