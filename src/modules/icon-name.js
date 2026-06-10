import weatherConditions from '../assets/data/weather_conditions.json';

export default function getIconName(weatherCondition, time) {
  if (weatherCondition === 'Clear') weatherCondition = 'Sunny';
  const weatherIconPair = weatherConditions.find(
    obj => obj.condition === weatherCondition
  );

  if (!weatherIconPair) {
    return time > '06:00' && time < '20:00' ? 'wi-day-cloudy' : 'wi-night-alt-cloudy';
  }

  return time > '06:00' && time < '20:00'
    ? weatherIconPair.dayIcon
    : weatherIconPair.nightIcon;
}
