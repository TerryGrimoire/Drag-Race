import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

function Nav() {
  return (
    <div>
      <section className='nav_container' id='top'>
     <h3 className='nav_logo'> <Link to="/" > <img src={logo} alt="logo_heels" className='logo' /></Link> </h3>
        <ul className='nav_ul'>
            <Link to="/" > <li> Main Page </li> </Link>
            <Link to="/Queens" > <li> Queens </li> </Link>
            <Link to="/Vocabulary" > <li> Library </li> </Link>
            <Link to="/Contact" > <li> Contact </li> </Link>
        </ul>
      </section>

    </div>
  )
}

export default Nav;