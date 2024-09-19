import React from "react";

function Carrd(props){
    return(
        <div className="profile-card">
        <img src= {props.icon} alt="Profile" className="profile-picture" />
        <h1 className="profile-name">{props.name}</h1>
        <p className="profile-bio">{props.bio}</p>
      </div>
    );
};

export default Carrd;