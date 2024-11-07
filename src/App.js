// src/App.js
import React from 'react';
import { useState } from 'react';
import './App.css';
import WeatherDashboard from './components/WeatherDashboard';

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');
  

  return (
    <div className="App"  style={{
      backgroundImage: `url(${backgroundImage || 'https://img.freepik.com/free-vector/purple-blue-light-gradient-background_78370-2172.jpg?t=st=1731014030~exp=1731017630~hmac=93511e82e198709d4e6a4a1d447d6f585f937704a5ebfda0f1510f4e2d620a5e&w=1380'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    {/* <img src={backgroundImage} alt={'Default'} style={{ width: '100%', height: 'auto' }} /> */}
      <WeatherDashboard  setBackgroundImage={setBackgroundImage} backgroundImage={ backgroundImage} />
    </div>
  );
}

export default App;
