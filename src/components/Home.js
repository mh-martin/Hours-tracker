import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home(props) {
  const listProjects = props.projektit.map((projekti, index) =>
   <li key={index.toString()}>{projekti.nimi} - {projekti.kuvaus} - {projekti.alkupaiva.toString()}</li> 
  );

  return (
    <div>
      <h1>Home</h1>
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="addproject">Lisää projekti</Link>
        
      </nav> */}

      <h2>Avoimet projektit</h2>
      <ul>{listProjects}</ul>
      <Link to="hours">Kirjaa tunnit</Link>
      <h2>Päättyneet projektit</h2>
      <p>lista</p>
    </div>
  )
}

export default Home