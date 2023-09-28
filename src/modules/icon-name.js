import weatherConditions from '../assets/data/weather_conditions.json';

export default (weatherCondition, time) => {
  if (weatherCondition === 'Clear') weatherCondition = 'Sunny';
  const weatherIconPair = weatherConditions.find(
    obj => obj.condition === weatherCondition
  );
  console.log(weatherCondition);
  console.log(weatherIconPair);
  return time > '06:00' && time < '20:00'
    ? weatherIconPair.dayIcon
    : weatherIconPair.nightIcon;
};
