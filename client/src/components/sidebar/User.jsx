import React, { Component } from 'react';

import user from '../../../public/images/user.png'

class User extends Component {
  render () {
    return (
      <div className="user">
        <div className="user__image-box"><img className="user__image" src={user}/></div>
        <div className="user__name"><p>Hryhorii Zlowetski</p></div>
      </div>
    )
  }
}

export default User;
