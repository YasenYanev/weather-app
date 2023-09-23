export default async function renderWeather(fetchFn, units, targetElement) {
  const data = await fetchFn;
  console.log(data);

  renderCurrentLocation(data, targetElement.children[0], units);
  renderCurrentWeather(data, targetElement.children[1], units);
  renderCurrentWeatherDetails(data, targetElement.children[1], units);
  renderWeeklyForecast(data, targetElement.children[2], units);
}

function renderCurrentLocation(data, targetElement, units) {
  const location = data.location;
  targetElement.children[0].textContent = `${location.name}, ${location.country}`;
  targetElement.children[1].textContent = `${data.current.last_updated}`;
}

function renderCurrentWeather(data, targetElement, units) {
  const current = data.current;
  const condition = current.condition;
  const temperature = units[0] === 'c' ? current.temp_c : current.temp_f;

  const children = targetElement.children[0].children;
  children[0].src = condition.icon;
  children[1].textContent = `${temperature}°C`;
  children[2].children[0].textContent = condition.text;
  children[2].children[1].textContent = `Feels like ${current.feelslike_c}°C`;
}

function renderCurrentWeatherDetails(data, targetElement, units) {
  const detailsFromData = [
    data.current.gust_kph,
    data.current.humidity,
    data.current.uv,
    data.current.vis_km,
    data.current.cloud,
    data.forecast.forecastday[0].day.daily_chance_of_rain,
    data.forecast.forecastday[0].astro.sunrise,
    data.forecast.forecastday[0].astro.sunset,
    data.forecast.forecastday[0].astro.moon_phase,
  ];

  targetElement.querySelectorAll('.detail-value').forEach((element, index) => {
    element.textContent = detailsFromData[index];
  });
}

function renderWeeklyForecast(data, targetElement, units) {
  const daysElements = targetElement.children;
  data.forecast.forecastday.slice(1).forEach((dayObject, index) => {
    const dayElement = daysElements[index];
    dayElement.innerHTML = `
      <p>
        <span class="day-name">${dayObject.date}</span>
        <span class="daily-temp">${
          dayObject.day[`avgtemp_${units[0]}`]
        }°C</span>
        <span class="daily-night-temp">${
          dayObject.day[`mintemp_${units[0]}`]
        }°C</span>
        <span class="daily-wind-speed">${dayObject.day.maxwind_kph}</span>
      </p>`;
  });
}
