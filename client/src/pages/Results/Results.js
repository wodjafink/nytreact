import React, { Component } from 'react'
import { Container } from '../../components/Grid'
import API from '../../utils/API'
// import { Input, FormBtn } from '../../components/Form'

class Results extends Component {

  state = {
    articleList: []
  }

  _handleSave(articleID) {
    console.log("Clicked save button")
    console.log(articleID);
    var saveArticle = {};
    this.state.articleList.forEach(article=>{
      if (article.id === articleID){
        saveArticle = article;
      }
    })
    console.log(saveArticle);
    API.saveArticle(saveArticle)
  }

  componentDidMount() {

    console.log('mounted: ', this.props)
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

		return (
	      <Container fluid>
	        <div className="panel panel-default">
	          <div className="panel-heading">
	            <h3 className="panel-title">Results</h3>
	          </div>
	          <div className="panel-body">
              <ul className="list-group col-md-8 col-md-offset-2">
                { this.props.queryResults ? 
                  this.props.queryResults.map((search, i) => {
                    console.log("i is " + i);
                    // Build array of articles
                    this.state.articleList.push({
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
                            <button className="btn btn-success" type="button" onClick={() => {this._handleSave(search._id)}}>Save</button>
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