const errorEl = document.querySelector('.error-content');
const errorContainer = document.querySelector('.error-container');

export default err => {
  errorContainer.style.display = 'flex';
  errorEl.textContent = err;
};
