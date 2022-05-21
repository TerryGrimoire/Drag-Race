import React from 'react';
import welcomeData from '../data/welcomeData';
import Sections from './Sections';
import fleche from '../images/fleche.png';


function Introduction() {
  return (
    <section className="welcome_secondary_section" id='start'>
    <h2 className='welcome_title2'> Hello , <span> Hello</span> , Hello !</h2>
    <article className="welcome_introduction">
      <h3>Introduction</h3>
      <p className="welcome_intro_p">
        Let's start with some introduction about Ru Paul Drag Race. First of all, you need to know some names and vocabulary. The most important queen you need to know is of course RuPaul Andre Charles, also know as Mama Ru. Mother of all drags and creator of the amazing show RuPaul Drag Race, she is the most famous, respected and also the richest drag queen alive. Her best friend would be the most iconic judge of all time, Michelle Visage. The oldest friend and oldest bitch every known on the TV show. Funny, talented and somehow forgotten, everybody hates Michelle Visage but no one tells it in front of the cameras. Then, there is the Pit Crew. There is nothing to tell about them, just watch.
      </p>
    </article>
 <div className='sections_container'> {welcomeData.map(data => <Sections el={data} key={data.id} /> )} </div> 
 <img src={fleche} alt="fleche vers le bas" className='welcome_fleche' /> 
  </section>
  )
}

export default Introduction;