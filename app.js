(function() {
  console.log('INIT');

  // Get lava level (in pixels, from the bottom of the screen).
  function lavaLevel() {
    return Number(window.getComputedStyle(lava)['height'].slice(0, -2));
  }

  // Manage lava rising level.
  const lava = document.querySelector('.lava');
  const maxLavaHeight = 653;

  const risingLavaInterval = setInterval(() => {
    const currentLavaHeight = lavaLevel();
    const nextLavaHeight = currentLavaHeight + 50;

    if (nextLavaHeight <= maxLavaHeight) {
      lava.style.height = `${nextLavaHeight}px`;
    }
  }, 10000);

  clearInterval(risingLavaInterval);

  const questionModal = document.querySelector('.modal');
  const splashScreen = document.querySelector('.splash');
  const startButton = document.querySelector('.splash__start-button');

  startButton.addEventListener('click', () => {
    splashScreen.classList.add('splash--hidden');
    questionModal.classList.remove('modal--hidden');
  });

  // Enable turning the audio player on and off.
  const audioControl = document.querySelector('.audio-control');
  const audioPlayer = document.getElementById('audio-player');

  audioControl.addEventListener('click', event => {
    event.preventDefault();

    const isPlaying = !audioPlayer.paused;

    if (isPlaying) {
      audioPlayer.pause();
      audioControl.querySelector('img').src = 'assets/audio-off.svg';
    } else {
      audioPlayer.play();
      audioControl.querySelector('img').src = 'assets/audio-on.svg';
    }
  });
})();
