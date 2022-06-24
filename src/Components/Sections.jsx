import React, { useState } from 'react';


function Sections({ el }) {

  const [mouseOver, setMouseOver] = useState(false);

  return (
        <div className='welcome_sections' onMouseOver={()=> setMouseOver(true)} onMouseLeave={()=>setMouseOver(false)} >
        <img className='welcome_rupaul_img' src={el.image} alt={el.title} />
        <h3 className='sections_title3'> {el.title} </h3>
        {mouseOver? <div className='learn_more'> <p> Learn More about {el.title} </p> </div> : '' }
        </div>
  )

}

export default Sections