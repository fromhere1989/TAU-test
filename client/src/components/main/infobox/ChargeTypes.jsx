import React, { Component } from 'react';

import car from '../../../../public/images/car.svg'
import bike from '../../../../public/images/bike.svg'

class ChargeTypes extends Component {
  render () {
    return (
      <div className="chargeTypes">
        <img src="" className="chargeTypes__logo"/>
        <div className="chargeTypes__type">
          Type 2
        </div>
        <div className="chargeTypes__voltage">
          11kW
        </div>
        <div className="chargeTypes__tax">
          0.014 E/min
        </div>
        <img src={car} className="chargeTypes__logo-car"/>
        <img src={bike} className="chargeTypes__logo-bike"/>
      </div>
    )
  }
}

export default ChargeTypes;
