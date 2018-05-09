// Enable turning the audio player on and off.
export function enableAudioSupport() {
  const audioControl = document.querySelector('.audio-control');
  const audioControlImage = audioControl.querySelector('img');
  const audioPlayer = document.getElementById('audio-player');

  audioControl.addEventListener('click', event => {
    event.preventDefault();

    const isPlaying = !audioPlayer.paused;

    if (isPlaying) {
      audioPlayer.pause();
      audioControlImage.src = 'assets/audio-off.svg';
    } else {
      audioPlayer.play();
      audioControlImage.src = 'assets/audio-on.svg';
    }
  });
}
