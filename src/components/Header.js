import React, { useState } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; 

function Header() {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <div className='header'>
      <h1>Tuntikirjaus</h1>
      <nav className="navbar">
        <ul className='nav-list'>
          <li className='list'><Link to="/" className="link">Avoimet</Link></li>
          <li className='list'><Link to="completed" className="link">Päättyneet</Link></li>
          <li className='list'><Link to="addproject" className="link">Uusi projekti</Link></li>
        </ul>
        <div className="hamburger">
          {!navVisible && <FontAwesomeIcon icon={faBars} onClick={() => setNavVisible(visible => !visible)}/>}
          {navVisible && <FontAwesomeIcon size="lg" icon={faXmark} onClick={() => setNavVisible(visible => !visible)}/>}
          {navVisible && <ul className='hamburger-nav-list'>
            <li className='list'><Link to="/" className="link">Avoimet</Link></li>
            <li className='list'><Link to="completed" className="link">Päättyneet</Link></li>
            <li className='list'><Link to="addproject" className="link">Uusi projekti</Link></li>
          </ul>}
        </div>
      </nav>
    </div>
  )
}

export default Header