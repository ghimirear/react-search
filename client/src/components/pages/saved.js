import React, { Component } from "react";
import Container from "../elements/container";
import API from "../utils/api";
//import Alert from "../elements/alert"
import "../styles/search.css"
class Saved extends Component{
    state={
        results:[],
        message : "",
        id :""
    };
    // componenetDidmount to bring all the result when page load
    componentDidMount(){
        API.getDbBooks()
        .then(res=> this.setState({results: res.data}))

    };
    // to delete the book
    deleteBook= (event) =>{
      let  id = event.target.getAttribute('id')
        API.deleteDbBooks(id)
        .then (res=> {
        if (res.status= 200) {
          this.setState({id:id})   
          // filtering the aeeay to make new list after deletion
          const newBooks = this.state.results.filter(result=>result._id !== this.state.id) 
           this.setState({results :newBooks})
        }}
        );    
    };
  
    render(){
        return(
            <Container>
                {this.state.results.length ? (
                      <ul className="list-group search-results">
                      {this.state.results.map(result => (
                        <li key={result._id} className="list-group-item display-inline">
                          <img src={result.image} className="thumbnail" alt={result._id}/>
                            <h4>{result.title} by {result.author}</h4><a href={result.prevlink}><button className="btn btn-primary m-2">View</button></a> 
                            <button className="btn btn-success m-2" onClick={this.deleteBook} id ={result._id}>Delete</button> 
                          <p className="text-break">{result.description}</p>
        
                        </li>
                      ))}
                    </ul>
                ) : (
                    <Container>
                    <h5> No books to show... </h5>
                    <a href="/search"><button className="btn btn-primary">lets search</button></a>
                    </Container>
                )
                }
              
            </Container>
        )
    }
}
export default Saved;