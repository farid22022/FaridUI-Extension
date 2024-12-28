
import { useState } from "react";
import { motion } from "framer-motion";

const Weather = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [isWeatherVisible, setIsWeatherVisible] = useState(false);

  const fetchWeather = async () => {
    const API_KEY = "0d607fcaf50b19c7af0b145e82343021"; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City or country not found");
      const data = await response.json();
      setWeatherData(data);
      setError("");
      setIsWeatherVisible(true); // Show weather info after fetching data
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  const toggleWeather = () => {
    setIsWeatherVisible(!isWeatherVisible); // Toggle weather visibility
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="p-6  bg-gradient-to-r from-red-500 to-green-500 text-black rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-4">Weather App</h1>

        {/* Conditionally render input or weather info based on `isWeatherVisible` */}
        {!isWeatherVisible ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="text"
              placeholder="Enter country (e.g., BD)"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <button
              onClick={fetchWeather}
              className="w-full bg-gradient-to-r from-blue-600 to-red-900 text-black py-2 rounded hover:bg-blue-600"
            >
              Get Weather
            </button>
          </motion.div>
        ) : (
          // Weather Info
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            onClick={toggleWeather} // Clicking on weather will hide it
            className="cursor-pointer"
          >
            {weatherData && (
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold">
                  {weatherData.name}, {weatherData.sys.country}
                </h2>
                <p className="text-lg capitalize">
                  {weatherData.weather[0].description}
                </p>
                <p className="text-2xl font-bold">{weatherData.main.temp}°C</p>
                <div className="mt-4">
                  <p>Humidity: {weatherData.main.humidity}%</p>
                  <p>Pressure: {weatherData.main.pressure} hPa</p>
                  <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Weather;
