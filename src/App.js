import React from 'react';
import './App.scss';
import MyNavBar from './components/MyNavBar/MyNavBar';
import Team from './components/Team/Team';
import Auth from './components/Auth/Auth';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavBar />
        <h2> Sports Roster </h2>
        <Team />
        <Auth />
      </div>
    );
  }
}

export default App;
