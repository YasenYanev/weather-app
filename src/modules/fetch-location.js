export default async function fetchApi(location) {
  let data;

  try {
    data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=86126fe4908948ad893172220231309&q=${location}&days=9`,
      {
        mode: 'cors',
      }
    );
    return data.json();
  } catch (err) {
    console.log(err);
  }
}
