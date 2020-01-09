import React, { Component } from 'react';

import { Locations, Main, Sidebar } from '../components'

class App extends Component {
  render () {
    return (
      <div className="grid">
      <Sidebar />
      <Locations />
      <Main />
      </div>
    )
  }
}

export default App;
