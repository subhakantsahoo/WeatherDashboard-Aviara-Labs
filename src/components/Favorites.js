// src/components/Favorites.js
import React from "react";

const Favorites = ({
  favorites,
  addFavorite,
  removeFavorite,
  fetchWeather,
  getCityImage,
  city,
  setCity,
  weatherData,
  unit
}) => {
  // console.log('weatherData==>',weatherData);

  const getWeatherIcon = (description) => {
    
    if (!description) return "🌈";
    switch (true) {
      case description.includes("clear"):
        return "☀️"; // Clear sky
      case description.includes("cloud"):
        return "☁️"; // Cloudy
      case description.includes("rain"):
        return "🌧️"; // Rainy
      case description.includes("drizzle"):
        return "🌦️"; // Drizzle
      case description.includes("thunderstorm"):
        return "⛈️"; // Thunderstorm
      case description.includes("snow"):
        return "❄️"; // Snow
      case description.includes("mist"):
      case description.includes("fog"):
        return "🌫️"; // Mist or fog
      default:
        return "🌈"; // Default icon
    }
  };
  console.log('weatherData==>',weatherData);
  
  // const weatherIcon = getWeatherIcon(
  //   weatherData?.weather[0].description.toLowerCase()
  // );

  return (
    <div className="favorites">
      <h3 style={{ textShadow: '2px 2px 5px rgba(255, 255, 255, 0.7)', color: 'black',}}>Favorite Cities</h3>
      <ul style={{ maxHeight: "200px" }}>
        {favorites.map((city, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                fetchWeather(city.name);
                getCityImage(city.name);
                setCity(city.name);
              }}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                justifyContent: "space-between",
                display: "flex",
                marginBottom: "5px",
                height: "30px",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span style={{ marginLeft: "5px", color: "#fff",fontSize:'16px',fontWeight:'bold' }}>
                {city.name}
              </span>
              
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flex: 1,
              justifyContent: 'center',
              color: "white",
              textShadow: "2px 2px 5px rgba(255, 255, 255, 0.7)",
            }}>
              <span>
                {city?.weather[0].description.charAt(0).toUpperCase() + 
                 city?.weather[0].description.slice(1)}
              </span>
              <span style={{ fontSize: '20px' }}>
                {getWeatherIcon(city?.weather[0].description.toLowerCase())}
              </span>
              <span
            style={{
              textShadow: "2px 2px 5px rgba(255, 255, 255, 0.7)",
              color: "white",
              fontSize: "18px",
            }}
          >
            {city?.main.temp} °{unit === "metric" ? "C" : "F"}
          </span>
            </div>

        
                    <button
                onClick={() =>{
                  return removeFavorite(city.name)}
                  }
                style={{
                  backgroundColor: "red",
                  border: "1px solid gray",
                  height: "25px",
                  color: "#ffff",
                  cursor: "pointer",
                  marginRight: "2px",
                  transition: "background-color 0.3s ease, transform 0.2s ease",

                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#c72118";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "red";
                  e.target.style.transform = "scale(1)";
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className="favorite-button"
        onClick={() => addFavorite(weatherData)}
        style={{
          fontWeight: "500",
          fontSize: "14px",
          padding: "8px 16px",
          backgroundColor: "#ff6347",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease, transform 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#e6412b";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#ff6347";
          e.target.style.transform = "scale(1)";
        }}
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default Favorites;
