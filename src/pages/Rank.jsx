import React from 'react'

import RankStyles from '../styles/pages/Rank.scss'

class Rank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [
        {
          name: 'hey',
          score: 2,
        },
        {
          name: 'hey2',
          score: 23,
        },
      ],
    }
  }

  render() {
    let n = 1

    return (
      <React.Fragment>
        <h2>Classement</h2>
        {this.state.players.length === 0 && (
          <span>Pas de joueurs pour le moment.</span>
        )}
        {this.state.players.length !== 0 && (
          <table id={RankStyles['rank']}>
            <thead>
              <tr>
                <th colSpan="3">Meilleurs joueurs</th>
              </tr>
            </thead>
            <tbody>
              {this.state.players.map(player => {
                return (
                  <tr key={Math.random()}>
                    <td>{n++}</td>
                    <td>{player.name || 'Erreur'}</td>
                    <td>{player.score || '-1'} jours</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </React.Fragment>
    )
  }
}

export default Rank
