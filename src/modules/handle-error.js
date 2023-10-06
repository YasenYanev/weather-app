const errorEl = document.querySelector('.error-content');
const errorContainer = document.querySelector('.error-container');

const symbolPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/g;

const renderError = err => {
  errorContainer.style.display = 'flex';
  errorEl.textContent = err;
};

export default function handleError(valueToCheck) {
  if (valueToCheck == '') {
    renderError('Search bar empty');
    return true;
  } else if (valueToCheck.match(symbolPattern)) {
    renderError('Not a valid location');
    return true;
  } else if (valueToCheck === 'Error Fetching Data') {
    renderError('Unable to retrieve weather information at the moment.');
  }
}
