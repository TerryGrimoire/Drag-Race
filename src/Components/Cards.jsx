import React, { useState } from 'react';

function Cards({queen}) {

    const [mouse, setMouse] = useState(false);
    const nameofClass = mouse? 'show': 'hide';

    return (
        <div className='cards' onMouseOver={()=> setMouse(true)} onMouseLeave={()=> setMouse(false)} >
            <img src={queen.image_url} alt={queen.name} className='cards-image'   />
            <h3 className='cards-title'> {queen.name} </h3>
            <div className={nameofClass}>
            {queen.seasons? <p>Season {queen.seasons[0].seasonNumber} </p>:''}
            {queen.quote !== `""` ? <p> <span className='span2'>Favourite quote: </span> {queen.quote} </p> : <p> Unfortunately, this queen is too basic to have a favourite quote... </p> }
            {queen.missCongeniality? <p className='span2'> 💐 Miss Congeniality</p>:''}
            {queen.winner? <p className='span2'>🏆Winner </p>:''}
            </div>
        </div>   )

}

export default Cards;