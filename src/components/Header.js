import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <h1>Tuntikirjasovellus</h1>
      <nav className="navbar">
        <Link to="/" className="link">Avoimet</Link> |{" "}
        <Link to="completed" className="link">Päättyneet</Link> |{" "}
        <Link to="addproject" className="link">Uusi projekti</Link>
        
      </nav>
    </div>
  )
}

export default Header