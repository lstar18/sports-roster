import React from 'react';
import PropTypes from 'prop-types';
import './Player.scss';
import playerShape from '../../helpers/data/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
    editAPlayer: PropTypes.func.isRequired,
  }

  removePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  };

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { player, editAPlayer } = this.props;
    editAPlayer(player);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-3">
        <div className="card">
        <img className="card-img-top" src={player.imageUrl} alt="player" />
          <div className="card-body">
          <h3 className="card-title">{player.name}</h3>
          <h5 className="card-text">{player.position}</h5>
          <button className="btn btn-dark" onClick={this.removePlayerEvent}> <i className="far fa-trash-alt"></i> </button>
          <button className="btn btn-dark" onClick={this.editPlayerEvent}> <i className="fas fa-pencil-alt"></i> </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Player;
