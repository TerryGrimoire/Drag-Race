import React from 'react'
import seasonNumber from '../data/seasons';

function Search({season, setSeason, setCardSelection}) {
  return (

    <div >

      <section className='search_main'>
      <label htmlFor="search"></label>
      <input className='search_input' type="text" onChange={(event) => setCardSelection(event.target.value)} placeholder="Search here" />
            <select className='search_select' onChange={(e)=> setSeason(e.target.value)}>
              { seasonNumber.map((number, index) =>  <option value={number.number} key={index}className='search_option' >{number.display}</option> ) } 
            </select>

      </section>

    </div>
  )
}

export default Search;