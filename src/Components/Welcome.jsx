import React from 'react';
import Sections from './Sections';
import welcomeData from '../data/welcomeData';


function Welcome() {

  return (
    <div>

      <section className="welcome_main_section">

      <h1 className='welcome_title'> ✨ Welcome to the main page of RuPaul Drag Scene ✨</h1>

      </section>

      
      {welcomeData.map(data => <Sections el={data} key={data.id} /> )}
    </div>
  )
}

export default Welcome