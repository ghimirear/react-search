import React, { Component } from "react";
import "../styles/searchresults.css";

class SearchResults extends Component{
    render(props){
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item display-inline">
          <img src={result.volumeInfo.imageLinks.thumbnail} className="thumbnail"/>
            <h4>{result.volumeInfo.title} by {result.volumeInfo.authors}</h4><a href={result.volumeInfo.previewLink}><button className="btn btn-primary ">View</button></a>  
          <p className="text-break">{result.volumeInfo.description}</p>

        </li>
      ))}
    </ul>
  );
      }
}

export default SearchResults;