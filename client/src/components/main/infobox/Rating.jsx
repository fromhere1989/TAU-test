import React, { Component } from 'react';

import star from '../../../../public/images/star.png'

class Rating extends Component {
  render () {
    return (
      <div className="raiting">
        <div className="rating__imgbox">
          <img className="rating__img" src={star}/>
        </div>
        <div className="rating__value">0</div>
      </div>
    )
  }
}

export default Rating;
