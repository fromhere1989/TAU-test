import React, { Component } from 'react'

import Rating from './Rating'
import NaimLocationTime from './NaimLocationTime'
import Services from './Services'
import ChargeTypes from './ChargeTypes'

import cars from '../../../../public/images/cars.png'

class Infobox extends Component {
  render () {
    return (
      <div className="infobox">
        <div className="infobox__imgbox">
          <img className="infobox__img" src={cars}/>
        </div>
        <Rating />
        <NaimLocationTime />
        <Services />
        <ChargeTypes />
      </div>
    )
  }
}

export default Infobox;
