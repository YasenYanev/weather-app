import fetchLocation from './modules/fetch-location';

const searchForm = document.querySelector('form');
const searchBar = document.querySelector('.search-bar');
const main = document.querySelector('main');

console.log(main.children[0]);
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (searchBar.value == '') {
    alert('Not correct');
    return;
  }
  import('./modules/render-data').then((func) => {
    const renderWeather = func.default;
    renderWeather(fetchLocation(searchBar.value), main);
  });
});
