import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table>
      <tr>
          <th>Photo</th>
          <th>
          First Name
          </th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Email</th>
      </tr>
      {props.results.map(result => (
      <tr>
        <td key={result} >
          <span><img alt="Employee" src={result.picture.medium} className="img-fluid" /></span>
        </td>
        <td>
          <span>{result.name.first}</span>
        </td>
        <td>
          <span>{result.name.last}</span>
        </td>
        <td>
          <span>{result.gender}</span>
        </td>
        <td>
          <span>{result.email}</span>
        </td>
      </tr>
      ))}
    </table>
  );
}

export default SearchResults;
