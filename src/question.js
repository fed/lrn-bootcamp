export function toggleQuestionVisibility() {
  const question = document.querySelector('.question');

  question.classList.toggle('question--visible');
}

export function renderNextQuestion() {
  const visibleQuestion = document.querySelector('.learnosity-item.learnosity-item--visible');
  const nextQuestion = visibleQuestion.nextElementSibling;

  visibleQuestion.classList.remove('learnosity-item--visible');

  if (nextQuestion) {
    nextQuestion.classList.add('learnosity-item--visible');
  }
}
