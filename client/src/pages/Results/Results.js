import React, { Component } from 'react'
import { Container } from '../../components/Grid'
// import { Input, FormBtn } from '../../components/Form'

class Results extends Component {

  state = {
    articleList: []
  }

  handleSave() {
    console.log("Clicked save button")
  }

  componentDidMount() {
    setInterval(() => {
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }, 1000);
  }

  componentWillReceiveProps(someProp) {
    this.setState({queryResults: someProp})
    console.log("Component received props")
  }

  shouldComponentUpdate(nextProps){
    const newArticles = this.props.queryResults !== nextProps.queryResults;
    console.log("state changed");
    return newArticles;
  }

  refreshArticleList() {
    if (this.props.queryResults){
      this.setState({articleList: this.props.queryResults})
      console.log("Prop update complete")
    } else {
      console.log("Empty queryResults")
    }
  }

	render() {

    // const {queryResults} = this.props
    console.log("Render results");
    var that = this;
		return (
	      <Container fluid>
	        <div className="panel panel-default">
	          <div className="panel-heading">
	            <h3 className="panel-title">Results</h3>
	          </div>
	          <div className="panel-body">
              <ul className="list-group col-md-8 col-md-offset-2">
                { that.props.queryResults ? 
                  that.props.queryResults.map(function(search, i) {
                    console.log("i is " + i);
                    // Build array of articles
                    that.state.articleList.push({
                      id: search._id,
                      title: search.headline.main,
                      date: search.pub_date,
                      url: search.web_url
                    });
                    return (
                      <li key={search._id} className="list-group-item">
                        <div className="input-group">
                          <div type="text" className="form-control">
                            <a href={search.web_url} target="_new" style={ {color: "black"} }>{search.headline.main}</a>
                          </div>       
                          <span className="input-group-btn">
                            <button className="btn btn-success" type="button" onClick={that._handleSave} value={search._id}>Save</button>
                          </span>
                        </div>
                      </li>
                    );
                  })
                  :
                  /* Test item here for when queryResults is not available*/
                  <li key="40" className="list-group-item">
                    <div className="input-group">
                      <div type="text" className="form-control">
                        <a href="test" target="_new" style={ {color: "red"} }>A Test Title</a>
                      </div>       
                      <span className="input-group-btn">
                        <button className="btn btn-success" type="button">Save</button>
                      </span>
                    </div>
                  </li>}
              </ul>
	          </div>
	        </div>
	      </Container>
		);
	}

}

export default Results