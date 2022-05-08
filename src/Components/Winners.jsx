import React from 'react';
import Cards from '../Components/Cards';
import winners from '../data/winners';

function Winners() {

    return (
      <div>
          <h1 className='h1-queens'>Winners of RuPaul Drag Race</h1>
          <div className='cards-total'>{winners.map((winner) => <Cards queen={winner} />)}
            </div>
      </div>
    );
  }
  export default Winners;