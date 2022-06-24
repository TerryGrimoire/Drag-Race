import React from 'react'
import seasonNumber from '../data/seasons';

function Search({season, setSeason, setCardSelection}) {
  return (

    <div >

      <section className='search_main'>
            <select className='search_select' onChange={(e)=> setSeason(e.target.value)}>
              { seasonNumber.map((number, index) =>  <option value={number.number} key={index}className='search_option' >{number.display}</option> ) } 
            </select>
            <input className='search_input' type="text" onChange={(event) => setCardSelection(event.target.value)} placeholder="Search here" />

      </section>

    </div>
  )
}

export default Search;