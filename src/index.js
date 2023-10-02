import fetchWeather from './modules/fetch-location';
import isLoading from './modules/render-loading-animation';
import './assets/styles/general-styles.css';

const searchForm = document.querySelector('form');
const searchBar = document.querySelector('.search-bar');
const mainContentWrapper = document.querySelector('.main-content-wrapper');
const changeUnitsButtons = document.querySelectorAll('[data-toggle]');

let currentLocation = '';
let currentUnits = 'c';
let renderWeatherFn;

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (searchBar.value == '') {
    console.log('Search bar empty');
    return;
  }
  isLoading();
  currentLocation = searchBar.value;
  renderWeatherFn = (await import('./modules/render-data')).default;
  const data = await fetchWeather(searchBar.value, currentLocation);
  const getError = isLoading(data); // Display error when fetching fails.
  renderWeatherFn(data, currentUnits, mainContentWrapper);
  searchForm.reset();
});

changeUnitsButtons.forEach(btn => {
  btn.addEventListener('click', async () => {
    changeUnitsButtons.forEach(btn => (btn.className = ''));
    btn.classList.add('active');
    if (currentLocation == '') {
      btn.dataset.toggle === 'c' ? (currentUnits = 'c') : (currentUnits = 'f');
    } else if (currentLocation !== '') {
      btn.dataset.toggle === 'c' ? (currentUnits = 'c') : (currentUnits = 'f');
      isLoading();
      const data = await fetchWeather(searchBar.value, currentLocation);
      isLoading(data);
      const getError = isLoading(data); // Display error when fetching fails.
      renderWeatherFn(data, currentUnits, mainContentWrapper);
    }
  });
});
