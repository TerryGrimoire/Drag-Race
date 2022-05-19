import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cards from '../Components/Cards';
import Search from '../Components/Search';


function Queens() {

  const [seasonQueens, setSeasonQueens] = useState([]);
  const [season, setSeason] = useState('All');
  const [cardSelection, setCardSelection] = useState('');

const apiLink = season === 'All'? 'http://www.nokeynoshade.party/api/queens/all' : `http://www.nokeynoshade.party/api/seasons/${season}/queens` ;

useEffect(() =>{
  Axios
  .get(apiLink)
  .catch(err=> { console.log(err)})
  .then(res => setSeasonQueens(res.data))

},[season, apiLink])

    return (
      <div className="main">
        <h1>✨ Queen section ✨</h1>
        <Search season={season} setSeason={setSeason} cardSelection={cardSelection} setCardSelection={setCardSelection} />
      <div className='cards-total'>

        {seasonQueens
        .filter(el => el.name.includes(cardSelection))
        .map((queen)=> <Cards queen={queen} key={queen.id} /> ) }

      </div>
      </div>
    );
  }
  export default Queens;
