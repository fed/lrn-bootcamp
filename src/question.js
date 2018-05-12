export function renderNextQuestion() {
  const visibleQuestion = document.querySelector('.learnosity-item.visible');
  const nextQuestion = visibleQuestion.nextElementSibling;

  visibleQuestion.classList.remove('visible');

  if (nextQuestion) {
    nextQuestion.classList.add('visible');
  }
}

export function isLastQuestion() {
  const platforms = document.querySelector('.platforms');
  const tiles = document.querySelectorAll('.platforms__tile');
  const lastTile = platforms.lastElementChild;
  const activeTile = Array.from(tiles).filter(
    tile => tile.children.length === 2
  )[0];

  return lastTile === activeTile;
}
