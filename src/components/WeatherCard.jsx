import React from "react";
import { CloudIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const WeatherCard = ({ data }) => (
  <div
    className="bg-white rounded-xl shadow-lg p-5 mb-6 transition-all hover:shadow-xl"
    style={{
      backgroundColor: "var(--card-bg)",
      color: "var(--text-color)",
    }}
  >
    <div className="flex items-center gap-2 mb-4">
      <FontAwesomeIcon icon={faLocationDot} className="text-red-500" />
      <h2
        className="text-xl font-semibold text-gray-800"
        style={{
          color: "var(--text-color)",
        }}
      >
        {data.name}, {data.sys.country}
      </h2>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-4">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt={data.weather[0].description}
          className="w-24 h-24"
        />
        <div>
          <p
            className="text-4xl font-bold text-gray-800"
            style={{
              color: "var(--text-color)",
            }}
          >
            {Math.round(data.main.temp)}°C
          </p>
          <p className="text-lg text-gray-600 capitalize">
            {data.weather[0].description}
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div
        className="bg-gray-50 p-3 rounded-lg flex items-center gap-3"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}
      >
        <div
          className="bg-blue-100 p-2 rounded-full"
          style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
          }}
        >
          <FontAwesomeIcon icon={faDroplet} className="text-blue-500 h-5" />
        </div>
        <div>
          <p
            className="text-xs text-gray-500"
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
            }}
          >
            Humidity
          </p>
          <p
            className="font-semibold text-gray-800"
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
            }}
          >
            {data.main.humidity}%
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}>
        <div
          className="bg-blue-100 p-2 rounded-full"
          style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
          }}
        >
          <FontAwesomeIcon icon={faWind} className="text-blue-500 h-5" />
        </div>
        <div>
          <p
            className="text-xs text-gray-500"
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
            }}
          >
            Wind Speed
          </p>
          <p
            className="font-semibold text-gray-800"
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
            }}
          >
            {data.wind.speed} m/s
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}>
        <div className="bg-blue-100 p-2 rounded-full"style={{
      backgroundColor: "var(--bg-color)",
      color: "var(--text-color)",
    }}>
          <CloudIcon className="text-blue-500 h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500"
          style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
          }}>Feels Like</p>
          <p className="font-semibold text-gray-800"
          style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
          }}>
            {Math.round(data.main.feels_like)}°C
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}>
        <div className="bg-blue-100 p-2 rounded-full"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs text-gray-500"
          style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
          }}>Pressure</p>
          <p className="font-semibold text-gray-800"
          style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
          }}>
            {data.main.pressure} hPa
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default WeatherCard;
