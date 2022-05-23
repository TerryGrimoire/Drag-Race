import React from 'react';

function Explanation({ data }) {
  return (
    <div className='explanation_container'>
        <h4> {data.name} : </h4>  
        <p> {data.description} </p>      
    </div>
  )
}

export default Explanation;