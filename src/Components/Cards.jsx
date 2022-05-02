import React from 'react';

function Cards({queen}) {

    return (
        <div className='cards'>
            <h2 className='cards-title'> {queen.name} </h2>
            <img src={queen.image_url} alt={queen.name} className='cards-image'   />
            <div className='cards-description-container'>
            {queen.quote !== `""` ? <p> Favourite quote : {queen.quote} </p> :'This queen is too basic to have a favourite quote...' }
            {queen.seasons? <p>Season {queen.seasons[0].seasonNumber} </p>:''}
            {queen.missCongeniality? <p>Miss Congeniality</p>:''}
            {queen.winner? <p>Winner</p>:''}
            </div>
        </div>   )

}

export default Cards;