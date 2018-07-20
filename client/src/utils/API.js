import axios from 'axios'

export default {

  startSearch: function(params) {
    return axios.post("/api/search", params);
  },

  getResults: function() {
    return axios.get("/api/results");
  }


}
