import React, { Component } from 'react';

import Infobox from './infobox/Infobox'
import Mapbox from './Mapbox'

class Main extends Component {
  render () {
    return (
      <div className="main">
        <Infobox />
        <Mapbox />
      </div>
    )
  }
}

export default Main;
