// src/components/Favorites.js
import React from "react";

const Favorites = ({
  favorites,
  addFavorite,
  removeFavorite,
  fetchWeather,
  getCityImage,
  city,
  setCity
}) => {
  // console.log('city==>',city);

  return (
    <div className="favorites">
      <h3 style={{ textShadow: '2px 2px 5px rgba(255, 255, 255, 0.7)', color: 'black',}}>Favorite Cities</h3>
      <ul style={{ maxHeight: "200px" }}>
        {favorites.map((city, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                fetchWeather(city);
                getCityImage(city);
                setCity(city);
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
              <span style={{ marginLeft: "5px", color: "#fff" }}>
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </span>
              {/* <span>{weatherData.weather[0].description} {weatherIcon}</span> */}
              <button
                onClick={() => removeFavorite(city)}
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
        onClick={() => addFavorite(city)}
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
