import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card icon="download.jpg"name="Noelle Fontanar" bio="A comp sci student with a love for coffee"/>
      <Card icon="download2.jpg"name="Anne Santos" bio="An arts student with a love for tea"/>
      <Card icon="download3.jpg"name="Nana Fuentabilla" bio="A student with a love for water"/>
    </div>
  );
}

export default App;

