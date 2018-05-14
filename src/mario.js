// Make Mario jump to the next tile
export function moveMarioToTile(tileIndex) {
  const tiles = document.querySelectorAll('.platforms__tile');
  let mario = document.querySelector('.mario');

  if (mario) {
    mario.remove();
  } else {
    mario = document.createElement('img');
    mario.src = 'assets/mario.gif';
    mario.className = 'mario';
    mario.alt = '';
  }

  tiles[tileIndex].prepend(mario);
}

// Get Mario's vertical position from the very top of the screen.
export function getMarioPosition() {
  const mario = document.querySelector('.mario');

  return mario.getBoundingClientRect().bottom;
}

export function setMarioOnFire() {
  const mario = document.querySelector('.mario');
  const skeleton = document.createElement('img');

  // Replace Mario with an animated flame image.
  mario.src = 'assets/fire.gif';

  // Add a Mario skeleton underneath the fire.
  skeleton.className = 'mario-skeleton';
  skeleton.src = 'assets/skeleton.png';
  mario.parentNode.prepend(skeleton);
}
