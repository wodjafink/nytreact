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

    let params = [];
    params.push(this.state.topic);
    params.push(this.state.startYear);
    params.push(this.state.endYear);

    this.props.sendParams(params);
  }

  render() {
    return (
      <Container fluid>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Search</h3>
          </div>
          <div className="panel-body">
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