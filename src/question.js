export function renderNextQuestion() {
  const visibleQuestion = document.querySelector('.learnosity-item.visible');
  const nextQuestion = visibleQuestion.nextElementSibling;

  visibleQuestion.classList.remove('visible');

  if (nextQuestion) {
    nextQuestion.classList.add('visible');
  }
}
