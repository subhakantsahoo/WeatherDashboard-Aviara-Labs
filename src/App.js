// src/App.js
import React from 'react';
import { useState } from 'react';
import './App.css';
import WeatherDashboard from './components/WeatherDashboard';

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');
  

  return (
    <div className="App"  style={{
      backgroundImage: `url(${backgroundImage || 'https://img.freepik.com/free-photo/futuristic-dubai-landscape_23-2151339730.jpg?t=st=1731052926~exp=1731056526~hmac=6d6660e0dd53870cbcb674e5eca6e4685eac97ead9753ae84784bcc2b90062b7&w=1380'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    {/* <img src={backgroundImage} alt={'Default'} style={{ width: '100%', height: 'auto' }} /> */}
      <WeatherDashboard  setBackgroundImage={setBackgroundImage} backgroundImage={ backgroundImage} />
    </div>
  );
}

export default App;
