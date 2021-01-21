import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Employee"
          id="search"
        />
        <datalist id="employee">
          {props.employee.map(employee => (
            <option value={employee} key={employee} />
          ))}
        </datalist>
        {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button> */}
        
      </div>
    </form>
  );
}

export default SearchForm;
