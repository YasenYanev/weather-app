export default async function renderWeather(fetchFn, targetElement) {
  const data = await fetchFn;
  console.log(data);
  console.log(targetElement.children[0].innerHtml);
  const location = targetElement.children[0];
  //   const currentWeather = targetElement[1];
  //   const forecast = targetElement[2];

  renderCurrentLocation(data, location);
}

function renderCurrentLocation(data, targetElement) {
  targetElement.children[0].textContent = `${data.location.name}, ${data.location.country}`;
  targetElement.children[1].textContent = `${data.current.last_updated}`;
}

// function renderCurrentWeather(targetElement) {}
