export default async function renderWeather(fetchFn, targetElement) {
  const data = await fetchFn;
  console.log(data);
  const locationSection = targetElement.children[0];
  const currentWeather = targetElement.children[1];
  const forecast = targetElement.children[2];

  renderCurrentLocation(data, locationSection);
  renderCurrentWeather(data, currentWeather);
  renderCurrentWeatherDetails(data, currentWeather);
  renderWeeklyForecast(data, forecast);
}

function renderCurrentLocation(data, targetElement) {
  targetElement.children[0].textContent = `${data.location.name}, ${data.location.country}`;
  targetElement.children[1].textContent = `${data.current.last_updated}`;
}

function renderCurrentWeather(data, targetElement) {
  targetElement.children[0].children[0].src = data.current.condition.icon;
  targetElement.children[0].children[1].textContent = `${data.current.temp_c}°C`;
  targetElement.children[0].children[2].children[0].textContent =
    data.current.condition.text;
  targetElement.children[0].children[2].children[1].textContent = `Feels like ${data.current.feelslike_c}°C`;
}

function renderCurrentWeatherDetails(data, targetElement) {
  const detailsElements = [...targetElement.children[1].children[0].children];
  const detailsFromData = [
    data.current.gust_kph, // Wind
    data.current.humidity, // Humidity
    data.current.uv, // UV index
    data.current.vis_km, // Visibility
    data.current.cloud, // Cloudiness
    data.forecast.forecastday[0].day.daily_chance_of_rain, // Chance of rain
    data.forecast.forecastday[0].astro.sunrise, // Sunrise
    data.forecast.forecastday[0].astro.sunset, // Sunset
    data.forecast.forecastday[0].astro.moon_phase, // Moon phase
  ];

  detailsElements.forEach(detail => {
    detail.children[1].textContent =
      detailsFromData[detailsElements.indexOf(detail)];
  });
}

function renderWeeklyForecast(data, targetElement) {
  const daysElements = [...targetElement.children[1].children];
  daysElements.forEach(day => {
    const dayObject = data.forecast.forecastday[daysElements.indexOf(day) + 1];
    day.innerHTML = `
    <p>
      <span class="day-name">${dayObject.date}</span>
      <span class="daily-temp">${dayObject.day.avgtemp_c}°C</span>
      <span class="daily-night-temp">${dayObject.day.mintemp_c}°C</span>
      <span class="daily-wind-speed">${dayObject.day.maxwind_kph}</span>
    </p>`;
  });
}
