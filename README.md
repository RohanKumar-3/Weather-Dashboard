# Weather-Dashboard
# 🌦️ Weather Dashboard

A sleek and responsive weather application built with **React**, **Tailwind CSS**, and the **OpenWeatherMap API**. It provides real-time weather updates, a 5-day forecast, recent search history, and light/dark theme support.

## ✨ Features

- 🌍 **City Search** — Search weather by city name.
- 📦 **Current Weather** — Temperature, condition, humidity, wind, and more.
- 📅 **5-Day Forecast** — Grouped and displayed by day.
- 🕹️ **Dark/Light Mode** — Toggle UI themes (stored in `localStorage`).
- ♻️ **Refresh Button** — Reload weather for the last searched city.
- 🕵️ **Recent Searches** — Track and re-select recent search history (up to 5).
- ⏳ **Loading & Error Handling** — Clear feedback during API fetch or errors.

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Frontend | React, JSX, Tailwind CSS |
| Icons | Heroicons, FontAwesome |
| State Management | React Hooks (`useState`, `useEffect`) |
| API | [OpenWeatherMap](https://openweathermap.org/api) |

## 📦 Dependencies

- `react`, `react-dom`
- `@fortawesome/react-fontawesome`
- `@fortawesome/free-solid-svg-icons`
- `@heroicons/react`

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/RohanKumar-3/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your OpenWeatherMap API key**

   Get a free API key from [OpenWeatherMap](https://openweathermap.org/api), then replace the placeholder in your service function (e.g. `src/services/weatherService.js`):

   ```js
   const API_KEY = 'your_api_key_here';

   const fetchCityWeather = async (city) => {
     const response = await fetch(
       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
     );
     return await response.json();
   };
   ```

   > ⚠️ For a real deployment, store your key in a `.env` file (e.g. `VITE_API_KEY=...`) and add `.env` to `.gitignore` instead of hardcoding it.

4. **Run the app**
   ```bash
   npm run dev
   ```

## 📸 Screenshots

_Add screenshots or a demo GIF of the app here._

## 🙌 Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/api)
- [Heroicons](https://heroicons.com/)
- [Font Awesome](https://fontawesome.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rohan Kumar Choudhary**
[GitHub](https://github.com/RohanKumar-3) · [LinkedIn](https://www.linkedin.com/in/rohan-choudhary-903a1024b/)
