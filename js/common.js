window.addEventListener('DOMContentLoaded', () => {
  // Remove default focus styling from buttons after click.
  document.addEventListener('mouseup', event => {
    if (event.target.classList.contains('btn')) {
      event.target.blur();
    }
  });

  // Enable tooltips.
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
});