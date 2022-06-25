import React from 'react';

function SocialMedias({ el }) {
  return (
    <div>
        <a href={el.src} target='_blank' rel='noreferrer'> <section className="socialmedia_container">
          <img src={el.image} alt={el.title} className='socialmedia_img' />
          <p> {el.title} </p>
        </section></a>
    </div>
  )
}

export default SocialMedias;