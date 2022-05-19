import React from 'react';
import Axios from 'axios';
import {useState, useEffect} from 'react';
import Cards from '../Components/Cards';

 function Juges() {

    const [juges,setJuges] = useState([]);

useEffect(() =>{
        Axios
        .get('http://www.nokeynoshade.party/api/episodes/8/judges')
        .then((response) =>  setJuges(response.data)
        .catch(err => {console.log(err)})    
        )
    }, [])

    return (
      <div>
          <h1 className='h1-queens'>Juges and Extra special Guests</h1>
          <div className='cards-total'>{juges.map((juge) => <Cards queen={juge} key={juge.id} />)}
            </div>
      </div>
    );
  }
  
  export default Juges;
 
 
 