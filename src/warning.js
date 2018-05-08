// ------------------------------------------------------
// Make the warning indicator visible when time starts to run out.
export function toggleWarningVisibility() {
  const warningIndicator = document.querySelector('.warning');

  warningIndicator.classList.toggle('warning--visible');
}
