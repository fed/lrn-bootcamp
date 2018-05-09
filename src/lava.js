// Get lava level (in pixels, from the bottom of the screen).
export function getLavaLevel() {
  const lava = document.querySelector('.lava');

  return Number(window.getComputedStyle(lava)['height'].slice(0, -2));
}

// Lava rising level management.
export function openLavaGates() {
  const lava = document.querySelector('.lava');
  const lavaLevelRisingInterval = 9000; // in milliseconds.
  const maxLavaHeight = 653; // in pixels.

  setInterval(() => {
    const currentLavaHeight = getLavaLevel();
    const nextLavaHeight = currentLavaHeight + 25; // Increment the lava height in 25px.

    if (nextLavaHeight <= maxLavaHeight) {
      lava.style.height = `${nextLavaHeight}px`;
    }
  }, lavaLevelRisingInterval);
}
