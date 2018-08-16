import React, { Component } from 'react'
import './Landing.css'
import LandingNav from './LandingNav';
import CeramicCalc from './calc/CeramicCalc.js'
import AdhesiveCalc from './calc/AdhesiveCalc';
import GroutCalc from './calc/GroutCalc';
import {Route,Switch} from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div className='card'>
        <div className='navbar'>
            ENMON
        </div>
        <div className='container'>
            <Switch>
            <Route exact path='/' component={LandingNav} />
            <Route path='/ceramic-calculator' component={CeramicCalc} />
            <Route path='/adhesive-calculator' component={AdhesiveCalc} />
            <Route path='/grout-calculator' component={GroutCalc} /> 

            </Switch>
        </div>
      </div>
    )
  }
}
