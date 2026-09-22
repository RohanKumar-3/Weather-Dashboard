import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import RecentSearches from "./components/RecentSearches";
import ThemeToggle from "./components/ThemeToggle";
import { fetchCityWeather } from "./services/weatherService";
import { ArrowPathIcon } from "@heroicons/react/24/outline";


// this is the app.jsx in this every components are renderd and established and this file is rendered in main.jsx and then there root of HTML  is incorporated.


const App = () => {
  const [weatherData, setWeatherData] = useState(null); // this usestate handles the the  weather data provided by the API .
  const [loading, setLoading] = useState(false); // this handles the loading part when data is refeshed or searched then this usestate triggers.
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]); //This is the Search history which updates the recent search according to the search data.
  const [lastCity, setLastCity] = useState(null); 

  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      setSearchHistory(JSON.parse(storedSearches));
    }
  }, []);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCityWeather(city);
      setWeatherData(data);
      setLastCity(city); 
      updateSearchHistory(city);
    } catch (err) {
      setError("City was not found or there is API error please check it.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // Refresh is handle here it will get referesh at the last city when trigger
  const handleRefresh = () => {
    if (lastCity) {
      handleSearch(lastCity); 
    }
  };

  const updateSearchHistory = (city) => {
    const normalized = city.trim().toLowerCase();
    setSearchHistory((prev) => {
      const updatedHistory = [
        city,
        ...prev.filter((c) => c.toLowerCase() !== normalized),
      ].slice(0, 5);
      localStorage.setItem("recentSearches", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };

  return (
    <div
      className="min-h-screen  transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 py-6"
      >
        <div className="  flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
            Weather Dashboard
          </h1>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex-1 max-w-xl">
              <SearchBar onSearch={handleSearch} />
            </div>
            
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {lastCity && (
                <button
                  onClick={handleRefresh}
                  className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow 
                           transition-transform hover:scale-105 active:scale-95"
                >
                  <ArrowPathIcon className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
                </button>
              )}
            </div>
          </div>
        </div>

        <RecentSearches searches={searchHistory} onSelect={handleSearch} />

        {loading && <LoadingSpinner />}
        
        {error && (
          <div className="animate-slideIn">
            <ErrorMessage message={error} />
          </div>
        )}

        {weatherData && (
          <div className="space-y-6">
            <div className="animate-fadeInUp">
              <WeatherCard data={weatherData} />
            </div>
            <div className="animate-fadeInUp delay-100">
              <Forecast forecastData={weatherData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
