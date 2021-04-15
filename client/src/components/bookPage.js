import React, { Component } from "react";
import NavBar from "../components/elements/header";
import Home from "../components/pages/home";
import Search from "../components/pages/search";
import Saved from "../components/pages/saved";
//import { Input, TextArea, FormBtn } from "../components/Form";

class BookPage extends Component{
    state={
        currentPage: "Home",
        results:[],
        booksName :""
    };

    // handling input change
    // handleInputChange = event =>{
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   this.setState({
    //     [name] : value
    //   });
    // };
    // rendering conditioanl pages
    handlePageChange = page => {
        this.setState({ currentPage: page });
      };
      // function to check the page status 
      renderPage = () => {
        if (this.state.currentPage === "Home") {
          return <Home />;
        } else if (this.state.currentPage === "Search") {
          return <Search />;
        } else if (this.state.currentPage === "Saved") {
          return <Saved />;
       
      };
    }


    render() {
        return (
          <div>
            <NavBar
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
            {this.renderPage()}
        
          </div>
        );
      }
}
export default BookPage;