import React from 'react';
import './App.css';
import Carrd from './Carrd';

const profileData = {
  profilePicture: "profile-card" 
};

function App() {
  return (
    <div className="App">
      <Carrd icon="download.jpg"name="Noelle Fontanar" bio="A comp sci student with a love for coffee"/>
      <Carrd icon="download2.jpg"name="Anne Santos" bio="An arts student with a love for tea"/>
      <Carrd icon="download3.jpg"name="Nana Fuentabilla" bio="A student with a love for water"/>
    </div>
  );
}

export default App;

