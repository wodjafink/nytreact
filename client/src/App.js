
import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import NoMatch from './pages/NoMatch'
// import Nav from './components/Nav'
// import PrivateRoute from './utils/PrivateRoute'
import Search from './pages/Search'
import Results from './pages/Results'
import Favorites from './pages/Favorites'

import queryNYT from "./utils/queryNYT.js"

class App extends Component {

  state = {
    searchParams: ["","",""],
    searchResults: []
  }

  displayState() {
    console.log("Start year " + this.state.searchParams[1])
    console.log("data");
    console.log(this.state.searchResults);
  }

  APISearchCall() {
    console.log('querying nyt')
    queryNYT.articleQuery(this.state.searchParams[0], this.state.searchParams[1], this.state.searchParams[2])
    .then(function(data) {
        console.log('nyt data: ', data);
        this.setState({ searchResults: data }, this.displayState);
      }.bind(this));
  }

  searchCallback = (params) => {
    console.log("Got some params " + params)
    this.setState({searchParams: params}, this.APISearchCall)
  }

  render() {
    return (
      <div>
        <Search sendParams={this.searchCallback} />
        <Results queryResults={this.state.searchResults} />
        <Favorites />
      </div>
    )
  }

}

export default App
