import React from 'react';
import library from '../data/library';
import Explanation from '../Components/Explanation';
import glasses from '../images/sunglasses.png';

function Vocabulary() {

  return (
    <div>
      <div className="queens_header">
      <img src={glasses} alt="travel bag" className='lipstick' /> <h1> Discover the drag <span> Library </span>  </h1> <img className='lipstick' src={glasses} alt="travel bag" />
      </div>
      <section>
            <h4> Learn more about the drag Vocabulary </h4>
            <div className="library_container">
              {library.map(el => <Explanation data={el} key={el.id} /> )}
            </div>
        </section>
    </div>
  )
}

export default Vocabulary;