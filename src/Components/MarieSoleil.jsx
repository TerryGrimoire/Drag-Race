import React from 'react';
import Sections from '../Components/Sections';
import marieso from '../data/marieso.js';

function MarieSoleil() {

  return (
    <section id='mariesoleil' className='mariesoleil_main'>
        <h2 className='mariesoleil_title2'>Marie Soleil was <span> born </span></h2>

        <div className='mariesoleil_container'>
            <article className="welcome_introduction">
            <h3> Becoming Myself</h3>
            <p className="welcome_intro_p">
                Thanks to RuPaul Drag Race, I was able to become more myself, I was no longer afraid of embracing my inner feminity. Although, I consider myself as male with male pronouns, I was freed and society gender norms. I no longer consider cloathes to have gender and I see no problem in wearing wigs, make-up or heels. As the drag mother of an entire generation, RuPaul was able to create an entire comunity and free so many people from toxic masculinity, patriarchy and self hatred.  
            </p>
            </article>
            <div className='sections_container'>
            {marieso.map( data =>  <Sections el={data} /> ) }
            </div>

        </div>
    </section>
  )
}

export default MarieSoleil;