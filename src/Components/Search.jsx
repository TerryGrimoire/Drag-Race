import React from 'react'
import seasonNumber from '../data/seasons';

function Search({season, setSeason, setCardSelection}) {
  return (

    <div >

      <section className='search_main'>
      <label htmlFor="search"> Search for your queen </label>
      <input type="text" onChange={(event) => setCardSelection(event.target.value)} />
      <p>filter per season</p>
            <select onChange={(e)=> setSeason(e.target.value)}>
              { seasonNumber.map((number, index) =>  <option value={number} key={index}>{number}</option> ) } 
            </select>

      </section>

    </div>
  )
}

export default Search;