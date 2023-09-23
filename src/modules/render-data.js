export default async function renderWeather(fetchFn, unit, targetElement) {
  const data = await fetchFn;

  renderCurrentLocation(data, targetElement.children[0]);
  renderCurrentWeather(data, targetElement.children[1], unit);
  renderCurrentWeatherDetails(data, targetElement.children[1], unit);
  renderWeeklyForecast(data, targetElement.children[2], unit);
}

function renderCurrentLocation(data, targetElement) {
  targetElement.children[0].textContent = `${data.location.name}, ${data.location.country}`;
  targetElement.children[1].textContent = `${data.current.last_updated}`;
}

function renderCurrentWeather(data, targetElement, unit) {
  const current = data.current;
  const condition = current.condition;
  const temperature = unit === 'c' ? current.temp_c : current.temp_f;
  const feelsLikeTemp =
    unit === 'c' ? current.feelslike_c : current.feelslike_f;
  const children = targetElement.children[0].children;

  children[0].src = condition.icon;
  children[1].textContent = `${temperature}°${unit.toUpperCase()}`;
  children[2].children[0].textContent = condition.text;
  children[2].children[1].textContent = `Feels like ${feelsLikeTemp}°${unit.toUpperCase()}`;
}

function renderCurrentWeatherDetails(data, targetElement, unit) {
  const current = data.current;
  const wind = unit === 'c' ? current.gust_kph : current.gust_mph;
  const visibility = unit === 'c' ? current.vis_km : current.vis_miles;
  const detailsElements = [...targetElement.children[1].children[0].children];
  const detailsFromData = [
    wind, // Wind
    current.humidity, // Humidity
    current.uv, // UV index
    visibility, // Visibility
    current.cloud, // Cloudiness
    data.forecast.forecastday[0].day.daily_chance_of_rain, // Chance of rain
    data.forecast.forecastday[0].astro.sunrise, // Sunrise
    data.forecast.forecastday[0].astro.sunset, // Sunset
    data.forecast.forecastday[0].astro.moon_phase, // Moon phase
  ];

  detailsElements.forEach(detail => {
    detail.children[1].textContent =
      detailsFromData[detailsElements.indexOf(detail)]; // Fix wind m/s mph
  });
}

function renderWeeklyForecast(data, targetElement, unit) {
  const daysElements = [...targetElement.children[1].children];
  daysElements.forEach(day => {
    const dayObjectFromData =
      data.forecast.forecastday[daysElements.indexOf(day) + 1];
    const avarageTemp =
      unit === 'c'
        ? dayObjectFromData.day.avgtemp_c
        : dayObjectFromData.day.avgtemp_f;
    const minTemp =
      unit === 'c'
        ? dayObjectFromData.day.mintemp_c
        : dayObjectFromData.day.mintemp_f;
    const maxWind = 'c'
      ? dayObjectFromData.day.maxwind_kph
      : dayObjectFromData.day.mintemp_mph;
    day.innerHTML = `
    <p>
      <span class="day-name">${dayObjectFromData.date}</span>
      <span class="daily-temp">${avarageTemp}°${unit.toUpperCase()}</span>
      <span class="daily-night-temp">${minTemp}°${unit.toUpperCase()}</span>
      <span class="daily-wind-speed">${maxWind}</span>
    </p>`;
  });
}
