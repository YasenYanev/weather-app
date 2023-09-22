export default async function fetchApi(location) {
  let data;

  try {
    data = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=86126fe4908948ad893172220231309&q=${location}`,
      {
        mode: 'cors',
      }
    );
    return data.json();
  } catch (err) {
    console.log(err);
  }
  console.log(data.json());
}
