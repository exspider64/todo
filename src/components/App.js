import React from 'react';
import Todos from "./Todos"
import Navbar from "./Navbar";
import About from "./About"
import Contact from "./Contact"
import {BrowserRouter as Router,
        Route} from "react-router-dom"
import {connect} from "react-redux"

const App = (props) => {
      return (
        <Router>
          <div className="App container">
            <Navbar />
            <Route exact path="/" component={Todos} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/todos" component={Todos} />
          </div>
        </Router>
      )
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App);
