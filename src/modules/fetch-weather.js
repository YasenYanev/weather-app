const API_KEY = 'YOUR_API_KEY_HERE';

export default async function fetchWeather(searchLocation, currentLocation) {
  let data;
  let chosenLocation;
  searchLocation == ''
    ? (chosenLocation = currentLocation)
    : (chosenLocation = searchLocation);

  try {
    data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${chosenLocation}&days=3`,
      {
        mode: 'cors',
      }
    );
    if (!data.ok) {
      throw new Error('Network response error');
    }
    return data.json();
  } catch (err) {
    console.log(err);
    return 'error';
  }
}
