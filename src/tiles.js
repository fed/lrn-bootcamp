export function renderTiles() {
  const tilesWrapper = document.querySelector('.platforms');
  const princessPosition = document.querySelector('.princess').getBoundingClientRect().left;
  let tileIndex = 0;

  while (getLastTilePosition() + getTileWidth() < princessPosition) {
    const tile = document.createElement('li');
    const innerImage = document.createElement('img');

    tile.className = 'platforms__tile';
    innerImage.className = 'platforms__tile-image';
    innerImage.src = 'assets/tiles.png';
    innerImage.alt = '';
    tile.style.transform = `translateY(-${80 * tileIndex}px)`;

    tile.appendChild(innerImage);
    tilesWrapper.appendChild(tile);

    tileIndex++;
  }
}

function getLastTilePosition() {
  const tiles = document.querySelectorAll('.platforms__tile');

  if (tiles.length === 0) {
    return 0;
  }

  const lastTileRect = tiles[tiles.length - 1].getBoundingClientRect();

  return lastTileRect.left + lastTileRect.width;
}

function getTileWidth() {
  const tile = document.querySelector('.platforms__tile');

  if (!tile) {
    return 0;
  }

  return tile.offsetWidth;
}
