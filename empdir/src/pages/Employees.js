import React, { Component, useEffect, useState } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";
import SearchForm from "../components/SearchForm";

class Search extends Component {

  state = {
    search: "",
    employee: [],
    results: [],
    error: "",
    employeeListChanges:[]
  };

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

  handleInputChange = event => {
    const value = event.target.value;
    let storedEmployees = JSON.parse(localStorage.getItem("Employees"));
    console.log(this.state.search)
    let filteredEmployees = storedEmployees.filter(letter => letter.name.first.includes(value))
    this.setState({ results: filteredEmployees });
  };

   sortEmployees = (a, b) => {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.first.toUpperCase();
    const nameB = b.name.first.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1; 
    }
    console.log(comparison)
    return comparison;
    
  }

  toggleSortFirstName = () =>{
      let newEmployeeList = JSON.parse(localStorage.getItem("Employees"));
      console.log(newEmployeeList)
      this.setState({
        employeeListChanges: newEmployeeList.sort((a, b) => a.name.first > b.name.first)
      })
      localStorage.setItem("Employees", JSON.stringify(newEmployeeList))
  }

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Employee Directory!</h1>
          
          <SearchForm
            handleInputChange={this.handleInputChange}
            employee={this.state.employee}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
