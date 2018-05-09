// Make Mario jump to the next tile
export function moveMarioToTile(tileIndex) {
  const mario = document.querySelector('.mario');
  const tiles = document.querySelectorAll('.platforms__tile');

  mario.remove();
  tiles[tileIndex].prepend(mario);
}

//<img src="assets/mario.gif" class="mario" alt="" />
