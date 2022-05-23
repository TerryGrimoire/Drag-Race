import React from 'react'
import contact from '../images/contact-us.png';
import socialMedia from '../data/socialMedia';
import SocialMedias from '../Components/SocialMedias';

function About() {
  return (
    <div className='about_main'>
        <div className="queens_header"> <img src={contact} alt="contact" className='lipstick'/> <h1> Contact me </h1> <img src={contact} alt="contact" className='lipstick'/></div>
        <section className='about_section2'>

        <h4> Now, if you are as much as a stalker as I am, it is time to investigate and find me on social media </h4>
        <img src="https://c.tenor.com/_OfSll7oM4QAAAAC/rupaul.gif" alt="mama ru invesgatigating" className='contact_rupaul_img' />

          <div className="socialmedias_container">
          {socialMedia.map(el => <SocialMedias el={ el } />)}
          </div>
        </section>

    </div>
  )
}

export default About;