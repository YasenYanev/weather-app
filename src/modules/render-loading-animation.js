const mainEl = document.querySelector('main');
const mainContentWrapper = document.querySelector('.main-content-wrapper');
const errorContainer = document.querySelector('.error-container');
const loadingAnimation = document.querySelector('.lds-dual-ring');

let callCount = 0;

function isOdd(num) {
  return num % 2 === 1;
}
export default function renderisLoading() {
  callCount++;

  if (isOdd(callCount)) {
    mainContentWrapper.style.display = 'none';
    errorContainer.style.display = 'none';
    mainEl.style.display = 'flex';
    loadingAnimation.style.display = 'inline-block';
  } else if (!isOdd(callCount)) {
    mainContentWrapper.style.display = 'block';
    mainEl.style.display = 'block';
    loadingAnimation.style.display = 'none';
  }
}
