import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

class Mapbox extends Component {
  render () {
    return (
      <div className="mapbox">
        <Map
          className="map"
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBjZ709C-jz1Jvd9UyQl2wc8MLWdmP2jbI'
})(Mapbox);
