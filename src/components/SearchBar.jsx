import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
//basic search bar using a useState


const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl ">
      <div className="relative">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full pl-4 text-cyan-600 pr-12 py-2 sm:py-3 border rounded-full
                   focus:outline-none focus:ring-2 focus:ring-blue-400
                   transition-all text-base sm:text-lg"
          style={{ text: "var(--text-color)" }}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 
                   text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
        >
          <MagnifyingGlassIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;