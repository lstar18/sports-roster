import React from 'react';
import firebase from 'firebase/app';
import './Auth.scss';

import 'firebase/auth';


class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger" onClick={this.loginClickEvent}> Google Login </button>
      </div>
    );
  }
}
export default Auth;
