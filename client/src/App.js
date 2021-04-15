import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/components/pages/home";
import Saved from "../src/components/pages/saved";
import Search from "../src/components/pages/search";
import Navbar from "../src/components/elements/header";

function App() {
  return (
    <Router>
        <Navbar />
       
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/home" component={Home} />
       
    </Router>
  );
}

export default App;
