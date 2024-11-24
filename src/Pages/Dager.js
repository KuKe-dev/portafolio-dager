import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'
import Projects from '../Components/Projects/Projects';

import './Dagar.css'

function Dager() {
  return (
    <>
        <Header />
        <div className='Main'>
          <Home />
          <Projects />
        </div>

    </>
  );
}

export default Dager;