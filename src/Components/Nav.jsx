import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div>
      <section className='nav_container'>
     <h1 className='nav_logo'> <Link to="/" > NoTeaNoShade </Link> </h1>
        <ul className='nav_ul'>
            <Link to="/" > <li> Main Stage </li> </Link>
            <Link to="/Queens" > <li> Queens </li> </Link>
            <Link to="/About" > <li> About us </li> </Link>
            <Link to="/Game" > <li> Sashay Away </li> </Link>
        </ul>
      </section>

    </div>
  )
}

export default Nav;