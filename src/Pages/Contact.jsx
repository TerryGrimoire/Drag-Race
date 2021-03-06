import React from 'react';
import { Helmet } from 'react-helmet';
import socialMedia from '../data/socialMedia';
import SocialMedias from '../Components/SocialMedias';

function Contact() {
  return (
    <div className='contact_main'>
      <Helmet>
        <title>Drag | Contact
        </title>
      </Helmet>
        <h1> Contact me </h1>
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

export default Contact;