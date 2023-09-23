import fetchLocation from './modules/fetch-location';

const searchForm = document.querySelector('form');
const searchBar = document.querySelector('.search-bar');
const main = document.querySelector('main');

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (searchBar.value == '') {
    alert('Not correct');
    return;
  }
  const renderWeather = (await import('./modules/render-data')).default;
  renderWeather(fetchLocation(searchBar.value), main);
});
