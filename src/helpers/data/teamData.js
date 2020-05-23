import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlayersbyUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allPlayersObject = result.data;
      const team = [];
      if (allPlayersObject !== null) {
        Object.keys(allPlayersObject).forEach((playerId) => {
          const newPlayer = allPlayersObject[playerId];
          newPlayer.id = playerId;
          team.push(newPlayer);
        });
      }
      resolve(team);
    })
    .catch((err) => reject(err));
});

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/players/${playerId}.json`);
export default { getPlayersbyUid, deletePlayer };
