import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Container } from '../../components/Grid'
import { Input, FormBtn } from '../../components/Form'
// import Jumbotron from '../../components/Jumbotron'

class Search extends Component {

	state = {
		topic: "",
		startYear: "",
		endYear: ""
	}

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();

    
  }

  render() {
    return (
      <Container fluid>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Search</h3>
          </div>
          <div class="panel-body">
            <form>
              <Input
                value={ this.state.topic }
                onChange={ this.handleInputChange }
                name='topic'
                placeholder='Topic'
              />
              <Input
                value={ this.state.startYear }
                onChange={ this.handleInputChange }
                name='startYear'
                placeholder='Start Year'
              />
             <Input
                value={ this.state.endYear }
                onChange={ this.handleInputChange }
                name='endYear'
                placeholder='End Year'
              />

              <FormBtn
                disabled={ !(this.state.topic && this.state.startYear && this.state.endYear) }
                onClick={ this.handleFormSubmit }
              >
                Search
              </FormBtn>
            </form>
          </div>
        </div>
      </Container>
    )
  }
}

export default Search