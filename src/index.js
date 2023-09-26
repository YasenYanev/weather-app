import fetchWeather from './modules/fetch-location';
import './assets/styles/general-styles.css';

const searchForm = document.querySelector('form');
const searchBar = document.querySelector('.search-bar');
const mainEl = document.querySelector('main');
const changeUnitsButtons = document.querySelectorAll('[data-toggle]');

let currentLocation = '';
let currentUnits = 'c';
let renderWeatherFn;

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (searchBar.value == '') {
    alert('Not correct');
  }
  currentLocation = searchBar.value;
  renderWeatherFn = (await import('./modules/render-data')).default;
  renderWeatherFn(
    fetchWeather(searchBar.value, currentLocation),
    currentUnits,
    mainEl
  );
  searchForm.reset();
});

changeUnitsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentLocation == '') {
      btn.dataset.toggle === 'c' ? (currentUnits = 'c') : (currentUnits = 'f');
    } else if (currentLocation !== '') {
      btn.dataset.toggle === 'c' ? (currentUnits = 'c') : (currentUnits = 'f');
      renderWeatherFn(
        fetchWeather(searchBar.value, currentLocation),
        currentUnits,
        mainEl
      );
    }
  });
});
