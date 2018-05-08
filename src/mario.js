// Display next tile
const tiles = document.querySelectorAll('.platforms__tile');
let currentTileIndex = 0;

// const tilesInterval = setInterval(() => {
//   renderNextTile(++currentTileIndex);
// }, 2000);

export function renderNextTile(nextTileIndex) {
  if (tiles[nextTileIndex]) {
    tiles[nextTileIndex].classList.add('platforms__tile--visible');
  }
}

// ------------------------------------------------------
// Make Mario jump to the next tile
export function moveMarioToTile(tileIndex) {
  const mario = document.querySelector('.mario');

  mario.remove();
  tiles[tileIndex].prepend(mario);
}
