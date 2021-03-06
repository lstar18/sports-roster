import React from 'react';
import './Team.scss';
import teamData from '../../helpers/data/teamData';
import authData from '../../helpers/data/authData';
import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

class Team extends React.Component {
  state = {
    editPlayer: {},
    team: [],
    formOpen: false,
  }

getInfo = () => {
  teamData.getPlayersbyUid(authData.getUid())
    .then((team) => this.setState({ team }))
    .catch((err) => console.error('unable to get all players', err));
}

componentDidMount() {
  this.getInfo();
}

removePlayer = (playerId) => {
  teamData.deletePlayer(playerId)
    .then(() => this.getInfo())
    .catch((err) => console.error('could not delete player', err));
};

saveNewPlayer = (newPlayer) => {
  teamData.addPlayer(newPlayer)
    .then(() => {
      this.getInfo();
      this.setState({ formOpen: false });
    })
    .catch((err) => console.error('unable to add new player', err));
}

  putPlayer = (playerId, updatedPlayer) => {
    teamData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getInfo();
        this.setState({ formOpen: false, editPlayer: {} });
      })
      .catch((err) => console.error('unable to update player', err));
  }

editAPlayer = (player) => {
  this.setState({ editPlayer: player, formOpen: true });
}

render() {
  const { team, formOpen, editPlayer } = this.state;
  const makeTeam = team.map((player) => <Player key={player.id} player={player} removePlayer={this.removePlayer} editAPlayer={this.editAPlayer} />);
  return (
      <div className="Team">
        <h1> The GOAT Team </h1>
        <button className="btn btn-dark mb-2" onClick={() => this.setState({ formOpen: true })}> <i className="fas fa-plus"></i> Add New Player </button>
        {formOpen ? <PlayerForm saveNewPlayer={this.saveNewPlayer} player={editPlayer} putPlayer={this.putPlayer} /> : ''}
        <div className="d-flex flex-wrap">
          { makeTeam }
        </div>
      </div>
  );
}
}

export default Team;
