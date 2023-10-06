import fetchWeather from './modules/fetch-weather.js';
import isLoading from './modules/render-loading-animation';
import renderError from './modules/render-error';

import './assets/styles/general-styles.css';

const errorContainer = document.querySelector('.error-container');
const searchForm = document.querySelector('form');
const searchBar = document.querySelector('.search-bar');
const mainContentWrapper = document.querySelector('.main-content-wrapper');
const changeUnitsButtons = document.querySelectorAll('[data-toggle]');
let currentLocation = '';
let currentUnits = 'c';
let renderWeather;

const handleWeatherUpdate = async () => {
  errorContainer.style.display = 'none';
  isLoading();

  try {
    const data = await fetchWeather(searchBar.value, currentLocation);
    if (data === 'error') throw new Error();
    renderWeather === undefined
      ? (renderWeather = (await import('./modules/render-data')).default)(
          data,
          currentUnits,
          mainContentWrapper
        )
      : renderWeather(data, currentUnits, mainContentWrapper);
  } catch (error) {
    isLoading();
    renderError('Unable to retrieve weather information at the moment.');
    return;
  }
  isLoading();
};

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (searchBar.value === '') {
    renderError('Search bar empty');
    return;
  }
  currentLocation = searchBar.value;
  handleWeatherUpdate();
  searchForm.reset();
});

changeUnitsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    changeUnitsButtons.forEach(btn => (btn.className = ''));
    btn.classList.add('active');

    if (currentLocation !== '') {
      currentUnits = btn.dataset.toggle === 'c' ? 'c' : 'f';
      handleWeatherUpdate().then(
        response => (errorContainer.style.display = 'none')
      );
    } else {
      currentUnits = btn.dataset.toggle === 'c' ? 'c' : 'f';
    }
  });
});
