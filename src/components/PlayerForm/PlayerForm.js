import React from 'react';
import PropTypes from 'prop-types';
import './PlayerForm.scss';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
    player: PropTypes.object.isRequired,
    putPlayer: PropTypes.func.isRequired,
  }

  state = {
    imageUrl: '',
    name: '',
    position: '',
    isEditing: false,
  }

  componentDidMount() {
    const { player } = this.props;
    if (player.name) {
      this.setState({
        imageUrl: player.imageUrl, name: player.name, position: player.position, isEditing: true,
      });
    }
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  savePlayer = (e) => {
    e.preventDefault();
    const { name, imageUrl, position } = this.state;
    const { saveNewPlayer } = this.props;
    const newPlayer = {
      imageUrl,
      name,
      position,
      uid: authData.getUid(),
    };
    saveNewPlayer(newPlayer);
  }

  updatePlayer = (e) => {
    e.preventDefault();
    const { name, imageUrl, position } = this.state;
    const { putPlayer, player } = this.props;
    const updatedPlayer = {
      imageUrl,
      name,
      position,
      uid: authData.getUid(),
    };
    putPlayer(player.id, updatedPlayer);
  }

  render() {
    const {
      imageUrl,
      name,
      position,
      isEditing,
    } = this.state;
    return (
      <div className="PlayerForm col-6 offset-3">
        <form>
          <div className="form-group">
            <label htmlFor="player-image-url">Image Url</label>
            <input type="text"
            className="form-control"
            id="player-image-url"
            placeholder="Image Url Here"
            value={imageUrl}
            onChange={this.imageUrlChange} />
          </div>
          <div className="form-group">
            <label htmlFor="player-name">Player Name</label>
            <input type="text"
            className="form-control"
            id="player-name"
            placeholder="Allen Iverson"
            value={name}
            onChange={this.nameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="player-position">Player Position </label>
            <input type="text"
            className="form-control"
            id="player-position"
            placeholder="Point Guard"
            value={position}
            onChange={this.positionChange} />
          </div>
          {
            isEditing
              ? <button type="submit" className="btn btn-dark" onClick={this.updatePlayer}> Update Player </button>
              : <button type="submit" className="btn btn-dark" onClick={this.savePlayer}> Save New Player </button>
          }

          <button type="submit" className="btn btn-dark" onClick={this.savePlayer}> Save New Player </button>
        </form>
      </div>
    );
  }
}
export default PlayerForm;
