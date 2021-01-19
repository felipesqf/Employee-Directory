import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getEmployees: function() {
  return axios.get('https://randomuser.me/api/', {
    params: {
      dataType: 'json'
    }
  })
  .then(function (response) {
    console.log(response);
  })
  }
}