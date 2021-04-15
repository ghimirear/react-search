import React, { Component } from "react";
import Container from "../elements/container";
import API from "../utils/api";
import Alert from "../elements/alert"
import "../styles/search.css"
class Search extends Component{
    state={
        results:[],
        booksName :"",
        books :{},
        message : ""
    };
      // componentDidMount just not to show blank page
      componentDidMount(){
        API.getBooks("harry potter")
        .then(res=> this.setState({results: res.data.items}))

     };
    // on change update the state
    handleInputChange = event =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name] : value
        });
      };
      // on form submit make an api call to get the results from google books.
      handleFormSubmit = event =>{
        event.preventDefault();

        API.getBooks(this.state.booksName)
        .then(res=>{
            if (res.data.items.length === 0) {
              this.setState({results:[]})
            }
           else{this.setState({results:res.data.items})
           console.log(res.data.items);} 
        })
        // clearInput
        this.setState({
          booksName :""
        })
      }
      // savebook to database
      saveBook = (event)=>{
        // getting the attribute of the button which has th id (unique key for each result)
        let id = event.target.getAttribute('id')
        // filtering and saving the api call result on the basis of which button is clicked.
        const books = this.state.results.filter(result => result.id === id)
       //console.log(books);
       //console.log(books.length);
        for (let i = 0; i < books.length; i++) {
        // making an object to store and for loop because data is saving as array on that books variable.
        var savingBook ={
          title : books[i].volumeInfo.title,
          author : books[i].volumeInfo.authors,
          description : books[i].volumeInfo.description,
          image : books[i].volumeInfo.imageLinks.thumbnail,
          prevlink : books[i].volumeInfo.previewLink,
        }
        }
        // saving book to database.
        API.saveBook(savingBook)
        .then(res=>{
          console.log(res);
          this.setState({message: savingBook.title + " by "+ savingBook.author + "is saved to your database"})
        })
        
      }
  
      // this page returning form and container to store results.
    render(){
        return(

            <Container>
            <form className="form-container align-center">
                <div className="form srarch-from">
                        
                        <input required 
                        onChange={this.handleInputChange}
                        value = {this.state.booksName}
                         type="text" className="search-input"
                          placeholder="name of the book"
                        name="booksName"
                        id = "booksName"
                         ></input>
                        <button className="btn btn-primary search-button text-capitalize" type ="submit"
                         onClick={this.handleFormSubmit}>search</button>
                    
                </div>
            </form>
            <Alert style={{ opacity: !this.state.message ? 0:1}} type="success" fade="true">
                <p>{this.state.message}</p>
        </Alert>
            <Container>
              {this.state.results.length ? (
                    <ul className="list-group search-results">
                    {this.state.results.map(result => (
                      <li key={result.id} className="list-group-item display-inline">
                        <img src={result.volumeInfo.imageLinks.thumbnail} className="thumbnail" alt={result.id}/>
                        <a href={result.volumeInfo.previewLink}><button className="btn btn-primary m-2 button">View</button></a> 
                          <button className="btn btn-success m-2 button" onClick={this.saveBook} id ={result.id}>Save</button> 
                          <h4>{result.volumeInfo.title} by {result.volumeInfo.authors}</h4>
                        <p className="text-break">{result.volumeInfo.description}</p>
      
                      </li>
                    ))}
                  </ul>
              ) : (
                <p>no results to show....</p>
              )
              }
          
            </Container>

    </Container>
        )
   
            
    
};
};
export default Search;