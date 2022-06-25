import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Axios from 'axios';
import Cards from '../Components/Cards';
import Search from '../Components/Search';

function Queens() {

  const [seasonQueens, setSeasonQueens] = useState([]);
  const [season, setSeason] = useState('All');
  const [cardSelection, setCardSelection] = useState('');

const apiLink = season === 'All'? 'https://www.nokeynoshade.party/api/queens/all' : `https://www.nokeynoshade.party/api/seasons/${season}/queens` ;

useEffect(() =>{
  Axios
  .get(apiLink)
  .catch(err=> { console.log(err)})
  .then(res => setSeasonQueens(res.data))

},[season, apiLink])

    return (
      <div className="main">
        <Helmet>
        <title>Drag | Queens
        </title>
      </Helmet>
        <div className="queens_header">
        <h1> Queens of RuPaul Drag Race</h1>
          </div>
        <Search season={season} setSeason={setSeason} cardSelection={cardSelection} setCardSelection={setCardSelection} />
      <div className='cards-total'>

        {seasonQueens
        .filter(el => el.name.toLowerCase().includes(cardSelection.toLocaleLowerCase()))
        .map((queen)=> <Cards queen={queen} key={queen.id} /> ) }

      </div>
      </div>
    );
  }
  export default Queens;
