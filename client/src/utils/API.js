import axios from 'axios'

export default {

  startSearch: function(params) {
    return axios.post("/api/search", params);
  },

  getResults: function() {
    return axios.get("/api/results");
  },

  saveArticle: function(article) {
    return axios.post("/api/articles", article);
  },

  deleteArticle: function(articleID) {
    return axios.delete("/api/articles/" + articleID);
  },

  getArticles: function() {
    return axios.get("/api/articles");
  }

}
