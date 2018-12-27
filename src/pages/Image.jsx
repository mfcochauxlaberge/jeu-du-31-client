import React from 'react'

import PlayStyles from '../styles/pages/Play.scss'

import Calendar from '../components/Calendar.jsx'

class Play extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageURL: '',
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Image</h2>
        <div>
          {this.state.imageURL === '' && (
            <span>Pas d'image pour le moment.</span>
          )}
          {this.state.imageURL !== '' && (
            <img
              src={this.state.imageURL}
              alt="Devinez la date de cette image"
            />
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default Play
