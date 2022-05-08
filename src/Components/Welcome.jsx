import React from 'react';
import RuPaul from '../images/Rupaul2.jpg'
import banner from '../images/banner.jpg'

function Welcome() {
  return (
    <div>
      <header className='welcome_header' style={{backgroundImage:`url(${banner})`}} >
      <h1 className='welcome_title'> 🏁 Welcome to the main stage of RuPaul Drag Race 🏁</h1>
      </header>
      <main>
      <img className='welcome_rupaul_img' src="https://vignette.wikia.nocookie.net/logosrupaulsdragrace/images/b/ba/Rupaul_blackpink_final.jpg/revision/latest/scale-to-width-down/350?cb=20110731183922" alt="RuPaul" />
        <img className='welcome_rupaul_img' src={RuPaul} alt="RuPaul" />
        <img className='welcome_rupaul_img' src="https://vignette.wikia.nocookie.net/logosrupaulsdragrace/images/b/ba/Rupaul_blackpink_final.jpg/revision/latest/scale-to-width-down/350?cb=20110731183922" alt="RuPaul" />
      </main>
    </div>
  )
}

export default Welcome