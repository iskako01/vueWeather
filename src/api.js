export async function fetchApiWeather(city) {
  const apiKey = "94c4fe95f0b325f23bbee21adc86741b";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
  );

  const data = response.json();
  return data;
}
