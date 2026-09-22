const API_KEY = "e1b292964b3c86ad361260f80c9496e0";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchCityWeather = async (cityName) => {
  try {
    // Here with the help of awit we fetch data from the API and then store the response file
    const currentRes = await fetch(
      `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );

    if (!currentRes.ok) throw new Error(`Failed to get current weather for ${cityName}`);
    const currentData = await currentRes.json();

    // Here as demand of the assignment we have to show five day data of a particular city therefore i have fetched it .
    const forecastRes = await fetch(
      `${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
    );

    if (!forecastRes.ok) throw new Error(`Failed to get forecast for ${cityName}`);
    const forecastData = await forecastRes.json();

    // Now i return the responses of both combinally.
    return {
      ...currentData,          //data like weather,name etc
      list: forecastData.list, 
    };
  } catch (e) {
    console.error("There was an error in fetching the data:", e);
    throw e;
  }
};
