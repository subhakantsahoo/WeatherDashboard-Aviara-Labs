// src/components/Search.js
import React, { useState } from 'react';

const Search = ({ setCity, fetchWeather }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setCity(input);
    fetchWeather(input);
  };

  return (
    <div className="search" style={{ width:'1000px',justifyContent:'space-between' }}>
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          marginLeft:'80px',
          height: '25px',
          width: '500px',
          borderRadius: '5px',
          border: '1px solid transparent', 
          backgroundColor: '#ffff',  
          color: 'black',                  
          padding: '5px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' 
        }}/>
      <button onClick={handleSearch} style={{ marginLeft:'20px',height:'38px',width:'80px',textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} disabled={!input}>Search</button>
    </div>
  );
};

export default Search;
