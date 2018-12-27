import React from 'react'
import { Link, Route } from 'react-router-dom'

import AppStyles from './styles/pages/App.scss'

import Play from './pages/Play.jsx'
import Image from './pages/Image.jsx'
import Rank from './pages/Rank.jsx'

class App extends React.Component {
  render() {
    return (
      <div id={AppStyles['app']}>
        <div id={AppStyles['header']}>
          <nav>
            <ul>
              <li>
                <Link to="/play">Jouer</Link>
              </li>
              <li>
                <Link to="/image">Image</Link>
              </li>
              <li>
                <Link to="/rank">Classement</Link>
              </li>
              <li>
                <Link to="#">Quitter</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id={AppStyles['content']}>
          {/* <Route path="/start" exact component={Start} /> */}
          <Route path="/play" exact component={Play} />
          <Route path="/image" exact component={Image} />
          <Route path="/rank" exact component={Rank} />
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
