import axios from "axios";
//get users from the randomusers api
export default {
  getEmployees: function() {
    return axios.get('https://randomuser.me/api/?results=100', {
      params: {
        dataType: 'json'
    }
  })
  }
}