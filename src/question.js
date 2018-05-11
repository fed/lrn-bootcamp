export function toggleQuestionVisibility() {
  const question = document.querySelector('.question');

  question.classList.toggle('question--visible');
}

export function renderNextQuestion() {
  // const questions = document.querySelectorAll('.learnosity-item');
  // const visibleQuestion = Array.from(questions).filter(question =>
  //   question.classList.contains('learnosity-item--visible')
  // );

  const visibleQuestion = document.querySelector('.learnosity-item.learnosity-item--visible');

  visibleQuestion.classList.remove('learnosity-item--visible');
  visibleQuestion.nextElementSibling.classList.add('learnosity-item--visible');
}
