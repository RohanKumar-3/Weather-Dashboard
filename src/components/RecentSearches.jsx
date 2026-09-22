import React from "react";

const RecentSearches = ({ searches, onSelect }) => {
  if (searches.length === 0) return null;


  //this shows the recent search city it only shows recent 5.
  return (
    <div className="mt-6 mb-5 animate-fadeIn">
      <h3 className="text-base sm:text-lg font-semibold mb-3 text-black dark:text-gray-200"
          style={{  color: "var(--text-color)" }}
>
        Recent Searches
      </h3>
      <div className="flex flex-wrap gap-2">
        {searches.map((city, index) => (
          <button
            key={index}
            className="bg-blue-400 dark:bg-gray-700/80 backdrop-blur-sm border border-blue-600 dark:border-gray-600 
                     px-4 py-2 rounded-full shadow-sm
                     text-sm sm:text-base text-black dark:text-gray-200
                     hover:bg-blue-500 dark:hover:bg-gray-600 
                     hover:shadow-md hover:-translate-y-0.5
                     active:translate-y-0 active:scale-95
                     transition-all duration-200 ease-out
                     animate-slideIn"
            onClick={() => onSelect(city)}
            style={{ 
              animationDelay: `${index * 50}ms`,
              transitionProperty: 'transform, box-shadow, background-color'
            }}
          >
            <span className="opacity-90 hover:opacity-100 transition-opacity">
              {city}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;