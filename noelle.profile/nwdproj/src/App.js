import React from 'react';
import './App.css';

const profileData = {
  name: "Noelle Fontanar",
  bio: "A comp sci student with a love for coffee",
  profilePicture: "profile-card" 
};

function App() {
  return (
    <div className="App">
      <div className="profile-card">
        <img src= {"download.jpg"} alt="Profile" className="profile-picture" />
        <h1 className="profile-name">{profileData.name}</h1>
        <p className="profile-bio">{profileData.bio}</p>
      </div>
    </div>
  );
}

export default App;

