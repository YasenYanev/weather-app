import { parse, format } from 'date-fns';
import htmlElementFactory from './html-elements-factory';
import getWeatherIconName from './icon-name';
import getMoonIconName from './moon-phase-icon';

import '../assets/styles/main.css';

function renderCurrentLocation(data, targetElement) {
  targetElement.appendChild(
    htmlElementFactory(`
      <section class='location fade-in'>
        <h1 class='location-name'>${data.location.name}, ${
          data.location.country
        }</h1>
        <p class='date-time'>${format(
          parse(data.current.last_updated, 'yyyy-MM-dd HH:mm', new Date()),
          'EEEE, MMMM dd, yyyy - h:mm bb'
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
  const currentTime = current.last_updated.split(' ')[1];
  targetElement.appendChild(
    htmlElementFactory(`
    <div class='current-weather-wrapper fade-in'>
      <section class='current-weather'>
      <div class='weather-img-container'><i class='wi ${getWeatherIconName(
        condition.text,
        currentTime
      )} condition-img-style'></i></div>
        <div class='current-temp-wrapper'>
            <div class='current-temp'>${Math.floor(
              temperature
            )}°${unit.toUpperCase()}</div>
            <div class='current-temp-desc'>
              <p class='weather-condition'>${condition.text}</p>
              <p class='weather-feeling'>Feels like ${feelsLikeTemp}°${unit.toUpperCase()}</p>
            </div>
        </div>
      </section>
    </div>
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
    ['Chance<br> of rain', forecast.day.daily_chance_of_rain + '%'],
    ['Sunrise', forecast.astro.sunrise],
    ['Sunset', forecast.astro.sunset],
    [
      'Moon phase',
      `<i
        class='wi ${getMoonIconName(forecast.astro.moon_phase)} moon-style'
      ></i>`,
    ],
  ];
  targetElement.children[1].appendChild(
    htmlElementFactory(`
      <section class='current-weather-details fade-in'>
          <ol class='weather-details'>
          ${detailsFromData
            .map(
              detail => `
            <li>
              <p class='detail-data'>${detail[1]}</p>
              <p class='detail-title'>${detail[0]}</p>
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
  targetElement.appendChild(
    htmlElementFactory(`
      <section class='next-days-forecast fade-in'>
        <h2 class='forecast-title'>Next 2 days</h2>
        <ol class='days-of-week'>
          ${(() => {
            let listElements = [];
            for (let i = 1; i < data.forecast.forecastday.length; i++) {
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
                  ? (dayObjectFromData.day.maxwind_mph * 0.44704).toFixed(1) +
                    'm/s'
                  : dayObjectFromData.day.maxwind_mph + 'mph';
              listElements.push(`            
            <li>
              <div class='forecast-day-name'>
                <p>${format(
                  parse(dayObjectFromData.date, 'yyyy-MM-dd', new Date()),
                  'EEEE'
                )}</p>
              </div>
              <div class='forecast-day-details'>
                <div> 
                  <p class='forecast-day-detail'>${Math.floor(
                    avarageTemp
                  )}°${unit.toUpperCase()}</p>
                  <p class='forecast-day-detail-title'>High</p>
                </div>
                <div> 
                  <p class='forecast-day-detail'>${Math.floor(
                    minTemp
                  )}°${unit.toUpperCase()}
                  </p>
                  <p class='forecast-day-detail-title'>Low</p>
                </div>
                <div> 
                  <p class='forecast-day-detail'>${maxWind}</p>
                  <p class='forecast-day-detail-title'>Wind</p>
                </div>
              </div>
            </li>`);
            }
            return listElements.join('');
          })()}
        </ol>
      </section>
  `)
  );
}

export default async function renderWeather(data, unit, targetElement) {
  targetElement.innerHTML = '';
  renderCurrentLocation(data, targetElement);
  renderCurrentWeather(data, targetElement, unit);
  renderCurrentWeatherDetails(data, targetElement, unit);
  renderWeeklyForecast(data, targetElement, unit);
}
