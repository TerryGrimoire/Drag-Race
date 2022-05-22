import React from 'react'
import contact from '../images/contact-us.png';
import socialMedia from '../data/socialMedia';
import SocialMedias from '../Components/SocialMedias';

function About() {
  return (
    <div>
        <div className="queens_header"> <img src={contact} alt="contact" className='lipstick'/> <h1> Contact me </h1> <img src={contact} alt="contact" className='lipstick'/></div>
        <section className='about_section2'>

          {socialMedia.map(el => <SocialMedias el={ el } />)}

        </section>

    </div>
  )
}

export default About;