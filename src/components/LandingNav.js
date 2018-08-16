import React, {Fragment} from 'react'
import './LandingNav.css';
import {Link} from 'react-router-dom';

const LandingNav = () => {
  return (
      <Fragment>

    <div className='container'>
      <div className='cardSingle'>
        Kako izabrati keramiku
      </div>
      <div className='cardSingle'>
      <Link to='/ceramic-calculator'><i className="fa fa-calculator"></i></Link>
      </div>

      <div className='cardSingle'>
        Lepak za keramiku
      </div>
      <div className='cardSingle'>
      <Link to='/adhesive-calculator'><i className="fa fa-calculator"></i></Link>
      </div>
      <div className='cardSingle'>
        Mase za fugovanje
      </div>
      <div className='cardSingle'>
      <Link to='/grout-calculator'><i className="fa fa-calculator"></i></Link>
      </div>
      {/* SPACE */}
      <div className='space'></div>
      <div className='space'></div>
      {/* SPACE */}
      <div className='cardSingle'>
        Dimenzije za planiranje kupatila
      </div>
      <div className='cardSingle'>
      <i className="fa fa-calculator"></i>
      </div>

      <div className='cardSingle'>
        Lepak za keramiku
      </div>
      <div className='cardSingle'>
      <i className="fa fa-calculator"></i>
      </div>
      <div className='cardSingle'>
        Mase za fugovanje
      </div>
      <div className='cardSingle'>
      <i className="fa fa-calculator"></i>
      </div>
    </div>

      </Fragment>
  )
}

export default LandingNav;
