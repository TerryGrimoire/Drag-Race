import React from 'react';
import mariesoleil from '../images/mariesoleil.jpg';
import mariesoleilv from '../images/mariesoleil.mp4';

function MarieSoleil() {
  return (
    <div id='mariesoleil' className='mariesoleil_main'>
        <h2>Marie Soleil was <span> born </span></h2>

        <section>
            <article className="welcome_introduction">
            <h3> Becoming Myself</h3>
            <p className="welcome_intro_p">
                Thanks to RuPaul Drag Race, I was able to become more myself, I was no longer afraid of embracing my inner feminity. Although, I consider myself as male with male pronouns, I was freed and society gender norms. I no longer consider cloathes to have gender and I see no problem in wearing wigs, make-up or heels. As the drag mother of an entire generation, RuPaul was able to create an entire comunity and free so many people from toxic masculinity, patriarchy and self hatred.  
            </p>

            </article>
            <div className="container_media">
            <img src={mariesoleil} alt="marie soleil" className='mariesoleil_img'/>
            <video src={mariesoleilv} autoPlay loop type="video/mp4" className='mariesoleil_vd'></video>
            </div>

        </section>
    </div>
  )
}

export default MarieSoleil;