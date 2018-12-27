import React from 'react'

import PlayStyles from '../styles/pages/Play.scss'

import Calendar from '../components/Calendar.jsx'

class Play extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      months: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ],
      month: 1,
      day: 1,
    }
  }

  render() {
    let month = this.state.months[this.state.month - 1]
    month = month.toLowerCase()

    return (
      <React.Fragment>
        <h2>Jouer</h2>
        <Calendar
          onDateChange={(month, day) => {
            this.setState(_ => {
              return { month, day }
            })
          }}
        />
        <div className={PlayStyles['submit']}>
          <div>
            <span>
              {this.state.day} {month}
            </span>
          </div>
          <div>
            <div>
              <button>✓</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Play
