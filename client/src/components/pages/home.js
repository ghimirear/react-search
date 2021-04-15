import React from "react";
import Container from "../elements/container";
import "../styles/heading.css"

function Home() {
    return (
        <Container fluid="-fluid">
            <div className="justify-center text-center heading-container align-center" style={{backgroundColor:"lightblue"}}>
                    <h1 className="text-capitalize"> (react) google books search </h1>
                    <h6>Search for books and save books of your interest</h6>
                   <a href="/search"> <button className="btn btn-primary">lets start</button></a>
            </div>
        </Container>
    )
}
export default Home;