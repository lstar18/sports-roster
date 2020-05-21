import React from 'react';
import './Team.scss';
import teamData from '../../helpers/data/teamData';
import authData from '../../helpers/data/authData';
import Player from '../Player/Player';

class Team extends React.Component {
  state = {
    team: [],
  }

  componentDidMount() {
    teamData.getPlayersbyUid(authData.getUid())
      .then((team) => this.setState({ team }))
      .catch((err) => console.error('unable to get all players', err));
  }

  render() {
    const { team } = this.state;
    const makeTeam = team.map((player) => <Player key={player.id} player={player} />);
    return (
      <div className="Team">
        <h1> The GOAT Team </h1>
        <div className="d-flex flex-wrap">
          { makeTeam }
        </div>
      </div>
    );
  }
}

export default Team;
