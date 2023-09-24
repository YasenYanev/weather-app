import { parse, format } from 'date-fns';
import htmlElementFactory from './html-elements-factory';

function renderCurrentLocation(data, targetElement) {
  targetElement.appendChild(
    htmlElementFactory(`
      <section class="location">
        <h1 class="location-name">${data.location.name}, ${
          data.location.country
        }</h1>
        <p class="date-time">${format(
          parse(data.current.last_updated, 'yyyy-MM-dd HH:mm', new Date()),
          'EEEE, MMMM dd, yyyy - HH:mm'
        )}</p>
      </section>
  `)
  );
}

function renderCurrentWeather(data, targetElement, unit) {
  const current = data.current;
  const condition = current.condition;
  const temperature = unit === 'c' ? current.temp_c : current.temp_f;
  const feelsLikeTemp =
    unit === 'c' ? current.feelslike_c : current.feelslike_f;
  targetElement.appendChild(
    htmlElementFactory(`
      <section class="current-weather">
          <img src="${condition.icon}" alt="weatherImg" />
          <div class="current-temp">${temperature}°${unit.toUpperCase()}</div>
          <div class="current-temp-desc">
            <p class="weather-condition">${condition.text}</p>
            <p class="weather-feeling">Feels like ${feelsLikeTemp}°${unit.toUpperCase()}</p>
          </div>
      </section>
  `)
  );
}

function renderCurrentWeatherDetails(data, targetElement, unit) {
  const current = data.current;
  const forecast = data.forecast.forecastday[0];
  const wind =
    unit === 'c'
      ? (current.wind_kph * 0.277777778).toFixed(1) + 'm/s'
      : current.wind_mph + 'mph';
  const visibility = unit === 'c' ? current.vis_km : current.vis_miles;
  const detailsFromData = [
    ['Wind', wind],
    ['Humidity', current.humidity + '%'],
    ['UV index', current.uv],
    ['Visibility', visibility + 'km'],
    ['Cloudiness', current.cloud + '%'],
    ['Chance of rain', forecast.day.daily_chance_of_rain + '%'],
    ['Sunrise', forecast.astro.sunrise],
    ['Sunset', forecast.astro.sunset],
    ['Moon phase', forecast.astro.moon_phase],
  ];
  targetElement.appendChild(
    htmlElementFactory(`
      <section class="current-weather-details">
          <ol class="weather-details">
          ${detailsFromData
            .map(
              detail => `
            <li>
              <p class="detail-title">${detail[0]}</p>
              <p class="detail-data">${detail[1]}</p>
            </li>
          `
            )
            .join('')}
          </ol>
      </section>
  `)
  );
}

function renderWeeklyForecast(data, targetElement, unit) {
  console.log(data);
  targetElement.appendChild(
    htmlElementFactory(`
      <section class="weekly-forecast">
        <h2 class="forecast-title">Weekly Forecast</h2>
        <ol class="days-of-week">
          ${(() => {
            let listElements = [];
            for (let i = 1; i < 9; i++) {
              const dayObjectFromData = data.forecast.forecastday[i];
              const avarageTemp =
                unit === 'c'
                  ? dayObjectFromData.day.avgtemp_c
                  : dayObjectFromData.day.avgtemp_f;
              const minTemp =
                unit === 'c'
                  ? dayObjectFromData.day.mintemp_c
                  : dayObjectFromData.day.mintemp_f;
              const maxWind =
                unit === 'c'
                  ? (dayObjectFromData.day.maxwind_kph * 0.277777778).toFixed(1)
                  : dayObjectFromData.day.maxwind_mph;
              listElements.push(`            
            <li>
              <p class="day">
                <span class="day-name">${format(
                  parse(dayObjectFromData.date, 'yyyy-MM-dd', new Date()),
                  'EEEE'
                )}</span>
                <span class="daily-temp">${avarageTemp}°${unit.toUpperCase()}</span>
                <span class="daily-night-temp">${minTemp}°${unit.toUpperCase()}</span>
                <span class="daily-wind-speed">${maxWind}</span>
              </p>
            </li>`);
            }
            return listElements.join('');
          })()}
        </ol>
      </section>
  `)
  );
}

export default async function renderWeather(fetchFn, unit, targetElement) {
  targetElement.innerHTML = '';
  const data = await fetchFn;
  renderCurrentLocation(data, targetElement);
  renderCurrentWeather(data, targetElement, unit);
  renderCurrentWeatherDetails(data, targetElement, unit);
  renderWeeklyForecast(data, targetElement, unit);
}
