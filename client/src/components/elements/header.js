import React from "react";
import { Link } from "react-router-dom";

function NavTabs(props) {
  return (
    <header className=" header navbar navbar-light lg-expand navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
    <div className="main-menu ml-5">
        <nav className="navbar" style={{backgroundColor: "#e3f2fd"}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>

            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-5 " style={{fontWeight: 700}}>
              <li className="nav-item ml-5" >
              <Link
              to="/home"
              className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
            >
             <h4>Home</h4> 
            </Link>
      </li>
      <li className="nav-item ml-5">
      <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
             <h4>Saved</h4> 
            </Link>
      </li>
      <li className="nav-item ml-5">
      <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
             <h4>Search</h4> 
            </Link>
      </li>
      </ul>
      </div>     
      </nav>
    </div>
 </header>
  );
}

export default NavTabs;