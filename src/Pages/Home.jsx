import React from 'react';
import { Helmet } from 'react-helmet';
import Welcome from '../Components/Welcome';

function Home() {

  return (
    <div>
      <Helmet>
        <title>Drag | Main Stage
        </title>
      </Helmet>
      <Welcome />
    </div>
  )
}


export default Home;