import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./home/Home";
import Blog from "./blog/Blog";
import CV from "./cv/Cv";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="navwrapper">
          <ul className="nav">
            <li>
              <Link to="/home" className="link">
                <div className="navitem">Home</div>
              </Link>
            </li>
            <li>
              <Link to="/cv" className="link">
                <div className="navitem">CV</div>
              </Link>
            </li>
            <li>
              <Link to="/blog" className="link">
                <div className="navitem">Blog</div>
              </Link>
            </li>
          </ul>
        </div>

        <Route exact path="/home" component={Home} />
        <Route path="/cv" component={CV} />
        <Route path="/blog" component={Blog} />
      </div>
    </Router>
  );
}

export default App;
