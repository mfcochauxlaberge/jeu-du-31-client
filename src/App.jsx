import React from 'react'
import { Link, Route } from 'react-router-dom'

import AppStyles from './styles/pages/App.scss'

import Play from './pages/Play.jsx'

class App extends React.Component {
  render() {
    return (
      <div id={AppStyles['app']}>
        <div id={AppStyles['content']}>
          {/* <Route path="/start" exact component={Start} /> */}
          <Route path="/play" exact component={Play} />
          {/* <Route path="/display" exact component={Play} /> */}
          {/* <Route path="/admin" exact component={Vote} /> */}
        </div>
        <footer id={AppStyles['footer']}>
          <nav>
            <ul>
              <li>
                Par <a href="https://mfcl.io">Marc-François Cochaux-Laberge</a>
              </li>
              <li>
                <a href="https://github.com/mfcochauxlaberge/jeu-du-31-client">
                  Code source
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    )
  }
}

export default App
