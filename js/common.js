// Remove default focus styling from buttons after click.
window.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mouseup', event => {
    if (event.target.classList.contains('btn')) {
      event.target.blur();
    }
  });
});