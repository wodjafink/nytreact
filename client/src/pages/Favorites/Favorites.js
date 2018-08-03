import React, { Component } from 'react'
import { Container } from '../../components/Grid'
import API from '../../utils/API'

class Favorites extends Component {

  state = {
    favoritesList: []
  }

  componentDidMount(){
    console.log("Mounted Favorites " + this.props)

    var tempFaves = []

    API.getArticles().then(res => {
      console.log("Favorites response")
      console.log(res);
      res.data.forEach(article => {
        tempFaves.push(article);
      })
      this.props.updateFavorites(tempFaves)
      this.setState({favoritesList: this.props.favoritesList})
    })
    

    // var tempFaves = []
    // API.getArticles().then(res => {
    //   console.log("Favorites response")
    //   console.log(res);
    //   res.data.forEach(article => {
    //     tempFaves.push(article);
    //   })
    //   this.setState({favoritesList: tempFaves})
    // })
  }

  render() {
    return (
      <Container fluid>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Favorites</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group col-md-8 col-md-offset-2">
              { this.props.favoritesList ? 
                this.props.favoritesList.map((article, i) => {
                  console.log("i is " + i);
                  // Build array of articles

                  return (
                    <li key={article._id} className="list-group-item">
                      <div type="text" className="form-control">
                        <a href={article.url} target="_new" style={ {color: "black"} }>{article.title}</a>
                      </div>       
                    </li>
                  );
                })
                :
                /* Test item here for when queryResults is not available*/
                <li key="40" className="list-group-item">
                  <div className="input-group">
                    <div type="text" className="form-control">
                      <a href="test" target="_new" style={ {color: "red"} }>No Favorites Saved!</a>
                    </div> 
                  </div>
                </li>
              }
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}

export default Favorites