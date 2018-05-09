export function toggleGameOverVisibility() {
  const gameOverMessage = document.querySelector('.game-over');
  const speechBubble = document.querySelector('.speech-bubble');

  gameOverMessage.classList.toggle('game-over--visible');
  speechBubble.classList.toggle('speech-bubble--visible');
}
