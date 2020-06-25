import React, {Component} from 'react';
import Todos from "./Todos.js"
import { render } from '@testing-library/react';
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import {BrowserRouter as Router,
        Route} from "react-router-dom"

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Finish React/Redux tutorial"}
    ]
  }
  render() {
      return (
        <Router>
          <div className="App container">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <h1 className="center blue-text">Todos</h1>
            <Route path="/todos" component={Todos}} />
          </div>
        </Router>
      )
  }
}

export default App;
