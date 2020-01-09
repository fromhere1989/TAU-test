import React, { Component } from 'react'

import User from './User'
import MapButton from './MapButton'
import logo from '../../../public/images/logo.png'

class Sidebar extends Component {
  render () {
    return (
      <div className="sidebar">
        <div className="logo">
          <img src={logo} className="logo__img"/>
        </div>
        <User />
        <MapButton />
      </div>
    )
  }
}

export default Sidebar;
