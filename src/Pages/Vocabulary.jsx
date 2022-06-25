import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';
import library from '../data/library';
import Explanation from '../Components/Explanation';
import arrow from '../images/fleche.png';

function Vocabulary() {

  return (
    <div className="vocabulary-container" >
      <Helmet>
        <title>Drag | Library
        </title>
      </Helmet>

      <HashLink to="#top"><img src={arrow} alt="arrow" className='go_up'/></HashLink>
      <div className="queens_header">
<h1> Discover the drag <span> Library </span>  </h1>
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