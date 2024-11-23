import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'
import Background from '../Components/Background/Background';

import './Dagar.css'

function Dager() {
  return (
    <>
        <Background/>
        <Header />
        <div className='Main'><Home /></div>

    </>
  );
}

export default Dager;