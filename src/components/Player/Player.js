import React from 'react';
import './Player.scss';
import playerShape from '../../helpers/data/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
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
          </div>
        </div>
      </div>
    );
  }
}
export default Player;
