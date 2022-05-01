import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <h1>Tuntikirjasovellus</h1>
      <nav className="navbar">
        <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
        <li className='list'><Link to="/" className="link">Avoimet</Link></li>
        <li className='list'><Link to="completed" className="link">Päättyneet</Link></li>
        <li className='list'><Link to="addproject" className="link">Uusi projekti</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header