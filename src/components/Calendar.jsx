import React from 'react'

import CalendarStyles from '../styles/components/Calendar.scss'

class Calendar extends React.Component {
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
      numDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month: 1,
      day: 1,
    }
  }

  render() {
    return (
      <div className={CalendarStyles['calendar']}>
        <div className={CalendarStyles['months']}>
          {this.state.months.map((month, m) => {
            m++
            return (
              <div
                key={m}
                className={
                  this.state.month === m ? CalendarStyles['selected'] : ''
                }
                onClick={this.changeDate('month', m)}
              >
                {month}
              </div>
            )
          })}
        </div>
        <div className={CalendarStyles['days']}>
          {Array.from(
            Array(this.state.numDays[this.state.month - 1]).keys(),
          ).map(d => {
            d++
            return (
              <div
                key={d}
                className={
                  this.state.day === d ? CalendarStyles['selected'] : ''
                }
                onClick={this.changeDate('day', d)}
              >
                {d}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  changeDate = (type, v) => _ => {
    this.setState(
      state => {
        if (type === 'month') {
          let day = state.day
          if (day > state.numDays[v - 1]) {
            day = state.numDays[v - 1]
          }
          return { month: v, day }
        } else if (type === 'day') {
          return { day: v }
        }
      },
      _ => {
        this.props.onDateChange(this.state.month, this.state.day)
      },
    )
  }
}

export default Calendar
