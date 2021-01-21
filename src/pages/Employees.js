import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";
import SearchForm from "../components/SearchForm";

class Search extends Component {
  state = {
    search: "",
    employee: [],
    results: [],
  };
//checking if the employees was retrieved from the api, if not, call the api and store in local storage
  componentDidMount() {
    let storedEmployees = JSON.parse(localStorage.getItem("Employees"));
    if (storedEmployees != null) {
        this.setState({ results: storedEmployees })
    }
    else{
        API.getEmployees()
        .then(res => {
        this.setState({ results: res.data.results })
        localStorage.setItem("Employees", JSON.stringify(res.data.results))
        })
        .catch(err => console.log(err));}
  }

  //filter employees
  handleInputChange = event => {
    const value = event.target.value;
    let storedEmployees = JSON.parse(localStorage.getItem("Employees"));
    let filteredEmployees = storedEmployees.filter(letter => letter.name.first.includes(value))
    this.setState({ results: filteredEmployees });
  };

  //Sort Employees
  sortEmployees = () => {
    let storedEmployees = JSON.parse(localStorage.getItem("Employees"));
    const sorted = storedEmployees.sort(function(a, b) {
        if(a.name.first.toLowerCase() < b.name.first.toLowerCase()) return -1;
        if(a.name.first.toLowerCase() > b.name.first.toLowerCase()) return 1;
        return 0;
       })
    this.setState({ results: sorted });
  }

//Render on the screen
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Employee Directory!</h1>
          <SearchForm
            handleInputChange={this.handleInputChange}
            employee={this.state.employee}
          />
          <button type="button" class="btn btn-dark" onClick={event => {event.preventDefault(); this.sortEmployees();}}>Order by first name</button>
          <table>
            <SearchResults results={this.state.results} />
            </table>
        </Container>
      </div>
    );
  }
}

export default Search;
