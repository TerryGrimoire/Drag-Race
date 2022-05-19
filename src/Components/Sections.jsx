import React from 'react';


function Sections({ el }) {
  return (
    <main className='welcome_main'>
        <section className='welcome_section'>
        <img className='welcome_rupaul_img' src={el.image} alt={el.title} />
        <article>
          <h2> {el.title} </h2>
         <p> {el.text} </p>
        </article>
        </section>
        </main>
  )
}

export default Sections