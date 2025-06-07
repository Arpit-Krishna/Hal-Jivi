import React, { useEffect, useState } from 'react';

function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [latLon, setLatLon] = useState(null);
  const API_KEY = 'cfce15fa2ff77d1d425b5f13024e3b94';

  const fetchWeather = (cityName) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        if (data.main && data.weather) {
          setWeather({
            temp: data.main.temp,
            description: data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            lat: data.coord.lat,
            lon: data.coord.lon,
          });
          setLatLon({ lat: data.coord.lat, lon: data.coord.lon });
        } else {
          console.error("Weather data missing:", data);
        }
      })
      .catch(error => console.error("Error fetching weather data:", error));
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
          .then(response => response.json())
          .then(data => {
            if (data.main && data.weather) {
              setWeather({
                temp: data.main.temp,
                description: data.weather[0].description,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
                lat: data.coord.lat,
                lon: data.coord.lon,
              });
              setLatLon({ lat: data.coord.lat, lon: data.coord.lon });
            }
          })
          .catch((error) => {
            console.error("Error fetching weather data by location:", error);
          });
      }, (error) => {
        console.error("Geolocation error:", error);
        alert("Geolocation is not enabled or supported in your browser.");
      });
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    } else {
      getLocation();
    }
  }, [city]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{
      backgroundColor: '#121212', padding: '10px', borderRadius: '15px', color: '#e0e0e0', width: '100%',
      textAlign: 'center', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)', background: 'linear-gradient(135deg, #111, #444)'
    }}>
      <div style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#00adb5', fontWeight: 'bold'}}>{city || 'Your Location'}</div>
      <div style={{ fontSize: '40px', fontWeight: 'bold', margin: '10px 0' }}>
        {weather.temp}°C
        <img src={weather.icon} alt={weather.description} style={{ marginLeft: '10px' }} />
      </div>
      <div style={{ fontSize: '18px', textTransform: 'capitalize' }}>{weather.description}</div>
      <div style={{ marginTop: '15px' }}>
        <iframe
          src={`https://www.google.com/maps?q=${latLon?.lat},${latLon?.lon}&z=10&output=embed`}
          style={{ width: '100%', height: '200px', border: 'none', borderRadius: '10px' }}
          title="Weather Location Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Weather;
