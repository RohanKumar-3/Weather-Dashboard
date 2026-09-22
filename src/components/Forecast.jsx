import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { CloudIcon } from "@heroicons/react/24/outline";

const Forecast = ({ forecastData }) => {
  //  Here i have grouped the forcast data coming from the API by day wise.
  const groupedForecast = forecastData.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleDateString("en-US", { weekday: "short" });

    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(item);

    return acc;
  }, {});

  // Extracted representative data for each day .
  const dailyForecast = Object.entries(groupedForecast)
    .map(([day, items]) => {
      const middayForecast =
        items.find((item) => {
          const date = new Date(item.dt * 1000);
          return date.getHours() >= 11 && date.getHours() <= 13;
        }) || items[Math.floor(items.length / 2)];

      return {
        day,
        date: new Date(middayForecast.dt * 1000),
        temp: middayForecast.main.temp,
        icon: middayForecast.weather[0].icon,
        description: middayForecast.weather[0].description,
        humidity: middayForecast.main.humidity,
        windSpeed: middayForecast.wind.speed,
      };
    })
    .slice(0, 5);// data will be taken for 5 days including the data fetched currently.

  return (
    <div className="shadow rounded-lg p-4 sm:p-6 mt-6 transition-colors">
      <h3 className="text-lg sm:text-xl font-semibold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4">
        {dailyForecast.map((forecast, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 sm:p-4 rounded-lg shadow 
                     transition-transform hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--card-bg)",
              color: "var(--text-color)",
            }}
          >
            <p className="font-medium text-sm sm:text-base">{forecast.day}</p>
            <p className="text-xs sm:text-sm opacity-75">
              {forecast.date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.icon}.png`}
              alt={forecast.description}
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p className="text-base sm:text-lg font-bold mt-1">
              {Math.round(forecast.temp)}°C
            </p>
            <p className="text-xs sm:text-sm opacity-75 text-center">
              {forecast.description}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <CloudIcon className="h-4 w-4 text-blue-400" />
              <p className="text-xs sm:text-sm">{forecast.humidity}%</p>
            </div>{" "}
            <p className="text-xs sm:text-sm">
              <FontAwesomeIcon icon={faWind} className="mr-1" />
              {forecast.windSpeed} m/s
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
