
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NoMatch from './pages/NoMatch'
import Nav from './components/Nav'
import PrivateRoute from './utils/PrivateRoute'
import Search from './pages/Search'

class App extends Component {

  render() {
    return (
      <div>
        <Search>
        </Search>


      </div>
    )
  }

}

export default App
