import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div>
      <section className='nav_container' id='top'>
     <h3 className='nav_logo'> <Link to="/" > NoTeaNoShade </Link> </h3>
        <ul className='nav_ul'>
            <Link to="/" > <li> Main Stage </li> </Link>
            <Link to="/Queens" > <li> Queens </li> </Link>
            <Link to="/About" > <li> Contact </li> </Link>
            <Link to="/SashayAway" > <li> Sashay Away </li> </Link>
        </ul>
      </section>

    </div>
  )
}

export default Nav;