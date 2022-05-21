import React from 'react';
import Sections from './Sections';
import welcomeData from '../data/welcomeData';
import fleche from '../images/fleche.png';
import { HashLink } from 'react-router-hash-link';

function Welcome() {

  return (
    <div className='welcome_main'>

      <section className="welcome_main_section">
      <h1 className='welcome_title'> ✨ Welcome to the main page of RuPaul Drag Scene ✨</h1>
      <HashLink to='#start'>
      <img src={fleche} alt="fleche vers le bas" className='welcome_fleche' /> 

      </HashLink>
      </section>

      <section className="welcome_secondary_section" id='start'>
        <h2 className='welcome_title2'> Hello, Hello, Hello !</h2>
      {welcomeData.map(data => <Sections el={data} key={data.id} /> )}
      </section>
    </div>
  )
}

export default Welcome