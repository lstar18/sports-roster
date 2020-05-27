import React from 'react';
import PropTypes from 'prop-types';
import './PlayerForm.scss';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
  }

  state = {
    imageUrl: '',
    name: '',
    position: '',
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

  render() {
    const { imageUrl, name, position } = this.state;
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
          <button type="submit" className="btn btn-dark" onClick={this.savePlayer}> Save New Player </button>
        </form>
      </div>
    );
  }
}
export default PlayerForm;
