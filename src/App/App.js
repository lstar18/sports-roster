import React from 'react';
import firebase from 'firebase/app';
import fbConnection from '../helpers/data/connection';
import MyNavBar from '../components/MyNavBar/MyNavBar';
import Team from '../components/Team/Team';
import Auth from '../components/Auth/Auth';

import 'firebase/auth';
import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      let componentToLoad = '';
      if (authed) {
        componentToLoad = <Team />;
      } else {
        componentToLoad = <Auth />;
      }
      return componentToLoad;
    };
    return (
      <div className="App">
        <MyNavBar authed={authed}/>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
