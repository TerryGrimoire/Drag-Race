import React from 'react';

function SocialMedias({ el }) {
  return (
    <div>
        <a href={el.src} target='_blank' rel='noreferrer'> <section className="socialmedia_container">
          <img src={el.img} alt={el.reseau} className='socialmedia_img' />
           <p> {el.reseau} </p>

        </section></a>
    </div>
  )
}

export default SocialMedias;