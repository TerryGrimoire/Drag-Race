import React from 'react';
import fleche from '../images/fleche.png';
import { HashLink } from 'react-router-hash-link';
import Introduction from './Introduction';

function Welcome() {

  return (
    <div className='welcome_main'>

      <section className="welcome_main_section">
      <h1 className='welcome_title'> ✨ Welcome to the <span> main page </span> of RuPaul Drag Scene ✨</h1>
      <HashLink to='#start' className='fleche_position'>
      <img src={fleche} alt="fleche vers le bas" className='welcome_fleche' />
      </HashLink>
      </section>

      <Introduction />

     
    </div>
  )
}

export default Welcome