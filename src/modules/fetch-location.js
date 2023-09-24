export default async function fetchWeather(searchLocation, currentLocation) {
  let data;
  let chosenLocation;
  searchLocation == ''
    ? (chosenLocation = currentLocation)
    : (chosenLocation = searchLocation);

  try {
    data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=86126fe4908948ad893172220231309&q=${chosenLocation}&days=9`,
      {
        mode: 'cors',
      }
    );
    return data.json();
  } catch (err) {
    throw new Error(err);
  }
}
