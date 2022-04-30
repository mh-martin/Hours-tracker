import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <h1>Tuntikirjasovellus</h1>
      <nav className="navbar">
        <Link to="/" className="link">Avoimet projektit</Link> |{" "}
        <Link to="addproject" className="link">Lisää projekti</Link>
        
      </nav>
    </div>
  )
}

export default Header