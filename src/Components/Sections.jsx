import React, { useState } from 'react';


function Sections({ el }) {

  const [mouseOver, setMouseOver] = useState(false);

  return (
        <div className='welcome_sections' onMouseOver={()=> setMouseOver(true)} onMouseLeave={()=>setMouseOver(false)} >
        <img className='welcome_rupaul_img' src={el.image} alt={el.title} />
        <div className='no_background_image flex_column'>
        <h3 className='sections_title3'> {el.title} </h3>
        <p> {el.slogan ? el.slogan : el.text} </p>
        </div>
        {(mouseOver && el.slogan) ? <div className='learn_more'> <p> {el.text} </p> </div> : ''}
        </div>
  )

}

export default Sections