export function toggleQuestionVisibility() {
  const question = document.querySelector('.question');

  question.classList.toggle('question--visible');
}

export function setQuestionTitle(title) {
  const questionTitle = document.querySelector('.question .question__title');

  questionTitle.textContent = title;
}

export function setQuestionOptions(options) {
  const questionOptions = document.querySelector('.question .question__options');

  questionOptions.innerHTML = options.map(option => `<li>${option}</li>`);
}
