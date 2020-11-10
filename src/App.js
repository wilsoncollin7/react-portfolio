import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// style
import './App.css';
// import components
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="*" component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
